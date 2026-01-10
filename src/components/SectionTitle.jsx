// framer-motion removed to avoid delayed section reveals on mobile

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span className="w-12 h-1.5 bg-[#ff6b6b] rounded-full"></span>
        <span className="w-4 h-1.5 bg-[#20c997] rounded-full"></span>
        <span className="w-2 h-1.5 bg-[#1e3a5f] rounded-full"></span>
      </div>
    </div>
  );
}