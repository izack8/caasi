export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="lg:text-start mb-4 group justify-start flex-col mr-auto">
      <h2 className="w-full text-black-100 text-md font-bold uppercase tracking-[0.09em] group-hover:text-rose-500 transition-all duration-300">
        {label}
          <div className="flex justify-start">
          <hr className="lg:w-[75%] lg:group-hover:w-full w-full transition-all duration-300 h-[1px] text-slate-700 border-slate-700 mt-2 mb-2" />
      </div>
      </h2>
      
    </div>
  );
}
