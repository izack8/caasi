import type { Timeline as TimelineType } from '@/lib/types';

interface TimelineProps {
  timelineData: TimelineType[];
}

export default function Timeline({ timelineData }: TimelineProps) {
  // Reverse array so latest date appears first
  const reversedData = [...timelineData].reverse();

  return (
    <div className="flex flex-col w-full">
        <div className="mb-2 flex flex-col">
            <h1 className="font-semibold text-2xl">Timeline</h1>
            <span className="text-xs">(earlier entries at the bottom)</span>
        </div>

        {reversedData && reversedData.length > 0 ? (
          reversedData.map((item, index) => (
            <TimelineItem key={index} timelineData={item} isLastItem={index === reversedData.length - 1} />
          ))
        ) : (
          <p>🔨🚧 No timeline data available (cause i haven't added it yet :/) 🚧🔨</p>
        )}
      
    </div>
  );
}

interface TimelineItemProps {
  timelineData: TimelineType;
  isLastItem: boolean;
}

function TimelineItem({ timelineData, isLastItem }: TimelineItemProps) {
  return (
    <div className="flex flex-col">

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{timelineData.timeline_date}</h1>
        <p className="text-justify">{timelineData.timeline_description}</p>
      </div>

        {/* if its the last item of array, dont render the line */}
        {!isLastItem && (
          <div className="flex border-l-2 border-slate-500 h-10 ml-4 my-2"></div>
        )}
      
    </div>
  )}

