export default function SectionLabel({ label, className, onClick, style }) {
  return (
    <div
      className={`w-full lg:text-start mb-4 mt-5 group justify-start ${className || ''}`}
      onClick={onClick}
      style={style}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h2 className="text-black-100 text-lg font-bold uppercase tracking-[0.005em] group-hover:text-rose-500 transition-all duration-300">
        {label}
      </h2>
      <div className="flex justify-start lg:justify-start">
        <hr className="w-36 lg:w-20 lg:group-hover:w-28 transition-all duration-300 h-[1px] text-slate-700 border-slate-700 !mt-2 !mb-2" />
      </div>
    </div>
  );
}
