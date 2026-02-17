import { useState } from 'react';
import Button from '@/components/ui/Button';
import { techCategories } from '@/app/config';

type TechCategoryKey = keyof typeof techCategories;

function TechStack() {
    const [activeTab, setActiveTab] = useState<TechCategoryKey>('dev');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (newTab: TechCategoryKey) => {
        if (newTab === activeTab) return;
        
        setIsTransitioning(true);
        
        setTimeout(() => {
            setActiveTab(newTab);
            setIsTransitioning(false);
        }, 150);
    };

    return (
        <div className="flex flex-col w-full mt-6">
            <div className="h-[150px] sm:h-[160px] mb-8 lg:mb-4 relative">
                <div 
                    className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 
                        lg:grid-cols-5 lg:gap-x-2 gap-x-3 gap-y-2 
                        justify-items-center transition-opacity duration-300 ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {techCategories[activeTab].items.map((tech, index) => (
                        <div 
                            key={`${activeTab}-${index}`} 
                            className="flex flex-col items-center group hover:scale-110 transition-all duration-200 w-full max-w-[80px] sm:max-w-none"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isTransitioning ? 'none' : 'fadeIn 0.8s ease-out forwards'
                            }}
                        >
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2 transition-all duration-200" 
                            />
                            <span className="text-xs sm:text-sm text-slate-500 
                            group-hover:text-zinc-900 transition-colors text-center leading-tight">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-1 sm:gap-1 justify-center mt-1">
                {Object.entries(techCategories).map(([key, category]) => (
                    <Button
                        key={key}
                        onClick={() => handleTabChange(key as TechCategoryKey)}
                        variant={activeTab === key ? 'active' : 'ghost'}
                        size="sm"
                        className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex-shrink-0"
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
            <div className='text-center text-[10px] mt-2'>My Tech Stack</div>

        </div>
    );
}

export default TechStack;