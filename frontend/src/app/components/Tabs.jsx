function Tabs({ activeTab, onTabClick }) {
  return (
    <div className="tabs flex flex-row gap-8 justify-end">
      <button
        className={`tab bg-transparent border-none outline-none text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === 'work' ? 'text-black' : 'text-gray-500'} hover:text-black`}
        style={{ boxShadow: 'none' }}
        onClick={() => onTabClick('work')}
      >
        work
        <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === 'work' ? 'bg-black' : 'bg-transparent'} group-hover:bg-black`} style={{ display: 'block' }}></span>
      </button>
      
      <button
        className={`tab bg-transparent border-none outline-none text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === 'writing' ? 'text-black' : 'text-gray-500'} hover:text-black`}
        style={{ boxShadow: 'none' }}
        onClick={() => onTabClick('writing')}
      >
        writing
        <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === 'writing' ? 'bg-black' : 'bg-transparent'} group-hover:bg-black`} style={{ display: 'block' }}></span>
      </button>

      <button
        className={`tab bg-transparent border-none outline-none text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === 'chat' ? 'text-black' : 'text-gray-500'} hover:text-black`}
        style={{ boxShadow: 'none' }}
        onClick={() => onTabClick('chat')}
      >
        chat
        <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === 'chat' ? 'bg-black' : 'bg-transparent'} group-hover:bg-black`} style={{ display: 'block' }}></span>
      </button>
    </div>
  );
}

export default Tabs;