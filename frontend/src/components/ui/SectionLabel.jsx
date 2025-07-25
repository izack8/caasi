export default function SectionLabel({ label, className }) {
  return (
    <div className={`w-full lg:text-start mb-4 group justify-start ${className || ''}`}>
      <h2 className="text-black-100 text-lg font-bold tracking-[0.3em] pb-2 group-hover:text-blue-400 transition-all duration-300">
        {label}
      </h2>
      <div className="flex justify-start lg:justify-start">
        <hr className="w-36 lg:w-20 lg:group-hover:w-28 transition-all duration-300 h-[1px] text-slate-700 border-slate-700 !mt-2 !mb-2" />
      </div>
    </div>
  );
}
