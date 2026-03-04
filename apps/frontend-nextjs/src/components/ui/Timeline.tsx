import type { Timeline as TimelineType } from '@/lib/types';
import MarkdownRenderer from './MarkdownRenderer';

interface TimelineProps {
  timelineData: TimelineType[];
}

export default function Timeline({ timelineData }: TimelineProps) {

  const reversedTimelineData = [...timelineData].reverse();

  const groupedByYear = reversedTimelineData.reduce((acc, item) => {
    
    const dateParts = item.timeline_date.split(' ');
    const month = dateParts[0];
    const year = dateParts[1] || new Date().getFullYear().toString();
    
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push({ ...item, month });
    return acc;
  }, {} as Record<string, Array<TimelineType & { month: string }>>);

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="flex flex-col w-full">
        <div className="mb-2 flex flex-col">
            <h1 className="font-semibold text-3xl">Timeline</h1>
            <span className="text-xs">(earlier entries at the bottom)</span>
        </div>

        {sortedYears.length > 0 ? (
          sortedYears.map((year, yearIndex) => (
            <YearComponent 
              key={year} 
              year={year} 
              items={groupedByYear[year]} 
              isLastYear={yearIndex === sortedYears.length - 1}
            />
          ))
        ) : (
          <p>🔨🚧 No timeline data available (cause i haven't added it yet :/) 🚧🔨</p>
        )}
      
    </div>
  );
}

interface YearComponentProps {
  year: string;
  items: Array<TimelineType & { month: string }>;
  isLastYear: boolean;
}

function YearComponent({ year, items, isLastYear }: YearComponentProps) {

  const groupedByMonth = items.reduce((acc, item) => {
    const month = item.month;
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(item);
    return acc;
  }, {} as Record<string, Array<TimelineType & { month: string }>>);

  const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const sortedMonths = Object.keys(groupedByMonth).sort((a, b) => {
    return monthOrder.indexOf(b) - monthOrder.indexOf(a);
  });

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">{year}</h2>
      
      {sortedMonths.map((month, monthIndex) => (
        <MonthComponent 
          key={month}
          month={month}
          items={groupedByMonth[month]}
          isLastMonth={monthIndex === sortedMonths.length - 1}
        />
      ))}

      {/* divider line between years */}
      {!isLastYear && (
        <div className="border-t-2 border-slate-500 my-10 w-2/3 justify-center mx-auto"></div>
      )}
    </div>
  );
}

interface MonthComponentProps {
  month: string;
  items: Array<TimelineType & { month: string }>;
  isLastMonth: boolean;
}

function MonthComponent({ month, items, isLastMonth }: MonthComponentProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">{month}</h3>
      
      <div className="flex flex-col gap-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div>
              <h4 className="text-md font-semibold">{item.timeline_date}</h4>
              <MarkdownRenderer>
                {item.timeline_description}
              </MarkdownRenderer>
            </div>
          </div>
        ))}
      </div>

      {/* if its not the last month, render the line */}
      {!isLastMonth && (
        <div className="flex border-l-2 border-slate-500 h-10 ml-4 my-2"></div>
      )}
    </div>
  );
}

