import { useEffect } from "react";

function Tabs({ activeTab, onTabClick }) {
  const tabs = [
    { id: 'about', label: 'about me' },
    { id: 'work', label: 'my work' },
    { id: 'writings', label: 'my writing' },
    { id: 'chat', label: 'resumé chat' },
  ];

  useEffect(() => {
    // scroll to top when activeTab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="tabs flex flex-row lg:flex-col gap-6 lg:gap-3 lg:items-start">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab bg-transparent border-none outline-none text-sm lg:text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === tab.id ? 'text-black' : 'text-gray-500'} hover:text-black`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
          <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === tab.id ? 'bg-black' : 'bg-transparent'}`}></span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;