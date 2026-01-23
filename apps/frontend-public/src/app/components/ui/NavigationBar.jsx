import Tabs from '../Tabs';

function NavigationBar({ activeTab, onTabClick }) {
  return (
    <div className="lg:hidden py-4 flex flex-row justify-center fixed top-0 w-full backdrop-blur-md z-50 px-5">
      <Tabs activeTab={activeTab} onTabClick={onTabClick} />
      
    </div>
    
  );
}

export default NavigationBar;