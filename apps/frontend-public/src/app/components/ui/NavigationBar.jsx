import { useNavigate } from "react-router-dom";

function NavigationBar({ activeTab }) {
  const navigate = useNavigate();
  
  const links = [
    { id: 'about', label: 'about me', path: '/' },
    { id: 'work', label: 'my work', path: '/work' },
    { id: 'writings', label: 'my writing', path: '/writings' },
    { id: 'chat', label: 'resumé chat', path: '/chat' },
  ];


  return (
    <nav className="flex lg:justify-start justify-center py-5 items-center">
      <div className="flex flex-row lg:flex-col gap-6 lg:gap-3 lg:items-start">
        {links.map((link) => (
          <button
            key={link.id}
            className={`bg-transparent border-none outline-none text-sm lg:text-md xl:text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === link.id ? 'text-black' : 'text-gray-500'} hover:text-black`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
            <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === link.id ? 'bg-black' : 'bg-transparent'}`}></span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavigationBar;