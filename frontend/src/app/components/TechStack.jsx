import { useState } from 'react';
import Button from './ui/Button';
import { techCategories } from '../config';

function TechStack() {
    const [activeTab, setActiveTab] = useState('dev');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (newTab) => {
        if (newTab === activeTab) return;
        
        setIsTransitioning(true);
        
        setTimeout(() => {
            setActiveTab(newTab);
            setIsTransitioning(false);
        }, 150);
    };

    return (
        <div className="flex flex-col w-full mt-6 sm:mt-10 px-2 sm:px-0">
            <div className="h-[160px] sm:h-[180px] mb-8 sm:mb-8 relative">
                <div 
                    className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 justify-items-center transition-opacity duration-300 ${
                        isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {techCategories[activeTab].items.map((tech, index) => (
                        <div 
                            key={`${activeTab}-${index}`} 
                            className="flex flex-col items-center group hover:scale-105 transition-all duration-200 w-full max-w-[80px] sm:max-w-none"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isTransitioning ? 'none' : 'fadeInUp 0.4s ease-out forwards'
                            }}
                        >
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2 transition-all duration-200" 
                            />
                            <span className="text-xs sm:text-sm text-slate-500 group-hover:text-zinc-900 transition-colors text-center leading-tight">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tab Navigation - Fixed position */}
            <div className="flex flex-wrap sm:flex-nowrap gap-1 sm:gap-1 justify-center">
                {Object.entries(techCategories).map(([key, category]) => (
                    <Button
                        key={key}
                        onClick={() => handleTabChange(key)}
                        disabled={isTransitioning}
                        variant={activeTab === key ? 'active' : 'default'}
                        size="sm"
                        className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex-shrink-0"
                    >
                        {category.name}
                    </Button>
                ))}
            </div>
            <div className='text-center text-[10px] mt-2'>Tech Stack</div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default TechStack;