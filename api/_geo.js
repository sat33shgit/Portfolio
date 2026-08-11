// Resolve an approximate "City, Country" for a request, based on the client IP.
// Order of preference:
//   1. Vercel's edge geo headers (free, zero latency, present in production)
//   2. A lookup against a free IP geolocation API (local dev / other hosts)
// Never throws - returns 'Unknown' when the location cannot be determined.

const LOOKUP_TIMEOUT_MS = 2500;
const PRIVATE_IP = /^(10\.|127\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|fc|fd|::1$)/i;

export function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0].trim() ||
         req.headers['x-real-ip'] ||
         req.socket?.remoteAddress ||
         'unknown';
}

function decode(value) {
  if (!value) return '';
  try {
    return decodeURIComponent(value).trim();
  } catch {
    return String(value).trim();
  }
}

function isPrivateIP(ip) {
  if (!ip || ip === 'unknown') return true;
  return PRIVATE_IP.test(ip.replace(/^::ffff:/, ''));
}

// Vercel returns ISO 3166-1 alpha-2 codes ("CA"); expand them to full names.
let countryNames;
function expandCountry(country) {
  if (!country || !/^[A-Za-z]{2}$/.test(country)) return country || '';
  try {
    countryNames ||= new Intl.DisplayNames(['en'], { type: 'region' });
    return countryNames.of(country.toUpperCase()) || country;
  } catch {
    return country;
  }
}

function formatLocation(city, country) {
  return [city, expandCountry(country)].filter(Boolean).join(', ');
}

async function geoFromLookup(ip) {
  if (isPrivateIP(ip)) return '';

  try {
    const resp = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS),
      headers: { 'User-Agent': 'portfolio-contact-form' },
    });
    if (!resp.ok) return '';
    const data = await resp.json();
    if (data?.error) return '';
    return formatLocation(data.city, data.country_name || data.country);
  } catch {
    return '';
  }
}

export async function resolveLocation(req, ip = getClientIP(req)) {
  const fromHeaders = formatLocation(
    decode(req.headers['x-vercel-ip-city']),
    decode(req.headers['x-vercel-ip-country']),
  );
  if (fromHeaders) return fromHeaders;

  return (await geoFromLookup(ip)) || 'Unknown';
}
