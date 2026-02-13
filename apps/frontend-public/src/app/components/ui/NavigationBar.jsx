import Tabs from '../Tabs';

function NavigationBar({ activeTab, onTabClick }) {
  return (
    <div className="flex lg:justify-start justify-center py-5 items-center sticky top-0">
      <Tabs activeTab={activeTab} onTabClick={onTabClick} />
      
    </div>
    
  );
}

export default NavigationBar;