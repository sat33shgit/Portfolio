const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (/\.jsx?$/.test(filePath)) {
      results.push(filePath);
    }
  });
  return results;
}

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  const lines = src.split(/\r?\n/);
  const importLines = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*import\s/.test(l)) importLines.push({i, line: l});
  }
  if (!importLines.length) return false;

  let changed = false;
  for (let j = importLines.length -1; j >=0; j--) {
    const {i, line} = importLines[j];
    // crude parse: default import, named imports, namespace
    // examples handled:
    // import React from 'react';
    // import React, { useState, useEffect } from 'react';
    // import { A, B } from 'x';
    // import * as Icons from 'lucide-react';
    // import logo from './logo.png';

    const matchNamed = line.match(/import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/);
    const matchDefaultNamed = line.match(/import\s+([\w_$]+)\s*,\s*\{([^}]+)\}\s*from\s+['"][^'"]+['"]/);
    const matchDefault = line.match(/import\s+([\w_$]+)\s+from\s+['"][^'"]+['"]/);
    const matchNamespace = line.match(/import\s+\*\s+as\s+([\w_$]+)\s+from\s+['"][^'"]+['"]/);

    const rest = lines.slice(i+1).join('\n');

    if (matchDefaultNamed) {
      const def = matchDefaultNamed[1];
      const named = matchDefaultNamed[2].split(',').map(s=>s.trim().split(' as ')[0].trim()).filter(Boolean);
      const defUsed = new RegExp('\\b'+def+'\\b').test(rest);
      const usedNamed = named.filter(n => new RegExp('\\b'+n+'\\b').test(rest));
      if (!defUsed && usedNamed.length===0) {
        // remove whole line
        lines.splice(i,1);
        changed = true;
      } else if (usedNamed.length===0 && defUsed) {
        // convert to default-only import
        lines[i] = line.replace(/,\s*\{[^}]+\}/,'');
        changed = true;
      } else if (!defUsed && usedNamed.length>0) {
        // convert to named-only
        lines[i] = line.replace(/import\s+[\w_$]+\s*,\s*/,'import ');
        changed = true;
      } else if (usedNamed.length < named.length) {
        // remove unused named specifiers
        const kept = usedNamed.join(', ');
        lines[i] = line.replace(/\{[^}]+\}/, '{ '+kept+' }');
        changed = true;
      }
    } else if (matchNamed) {
      const named = matchNamed[1].split(',').map(s=>s.trim().split(' as ')[0].trim()).filter(Boolean);
      const usedNamed = named.filter(n => new RegExp('\\b'+n+'\\b').test(rest));
      if (usedNamed.length===0) {
        lines.splice(i,1);
        changed = true;
      } else if (usedNamed.length < named.length) {
        const kept = usedNamed.join(', ');
        lines[i] = line.replace(/\{[^}]+\}/, '{ '+kept+' }');
        changed = true;
      }
    } else if (matchNamespace) {
      const ns = matchNamespace[1];
      const used = new RegExp('\\b'+ns+'\\b').test(rest);
      if (!used) {
        lines.splice(i,1);
        changed = true;
      }
    } else if (matchDefault) {
      const def = matchDefault[1];
      const used = new RegExp('\\b'+def+'\\b').test(rest);
      if (!used) {
        lines.splice(i,1);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log('Updated', filePath);
  }
  return changed;
}

function main(){
  const files = walk(SRC);
  let any = false;
  for (const f of files) {
    try{
      const changed = processFile(f);
      if (changed) any = true;
    } catch(e){
      console.error('Error processing', f, e.message);
    }
  }
  if (!any) console.log('No unused imports found');
}

main();
