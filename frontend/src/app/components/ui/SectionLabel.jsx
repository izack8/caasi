export default function SectionLabel({ label, className, onClick, style }) {
  return (
    <div
      className={`w-full lg:text-start mb-4 mt-5 group justify-start ${className || ''}`}
      onClick={onClick}
      style={style}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h2 className="text-black-100 text-md font-bold uppercase tracking-[0.09em] group-hover:text-rose-600 transition-all duration-300">
        {label}
      </h2>
      <div className="flex justify-start lg:justify-start">
        <hr className="w-20 group-hover:w-25 md:group-hover:w-28 transition-all duration-300 h-[1px] text-slate-700 border-slate-700 mt-2 mb-2" />
      </div>
    </div>
  );
}
