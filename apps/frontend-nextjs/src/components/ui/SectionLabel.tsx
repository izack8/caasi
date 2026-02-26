export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="lg:text-start mb-4 group justify-start flex-col mr-auto">
      <h2 className="w-full text-black-100 text-lg font-bold uppercase tracking-[0.05em] group-hover:text-zinc-600 transition-all duration-300">
        {label}
          <div className="flex justify-start">
          <hr className="lg:w-[75%] lg:group-hover:w-full w-full transition-all duration-300 h-[1px] mt-2 mb-2" />
      </div>
      </h2>
      
    </div>
  );
}
