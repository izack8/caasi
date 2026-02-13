import PageLinks from '../PageLinks';

function NavigationBar({ activeTab, onTabClick }) {
  return (
    <nav className="flex lg:justify-start justify-center py-5 items-center sticky top-0">
      <PageLinks activeTab={activeTab} onTabClick={onTabClick} />
      
    </nav>
    
  );
}

export default NavigationBar;