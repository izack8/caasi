export default function Timeline({ timelineData }) {
  // Reverse array so latest date appears first
  const reversedData = [...timelineData].reverse();

  return (
    <div className="flex flex-col w-full">

        {reversedData && reversedData.length > 0 ? (
          reversedData.map((item, index) => (
            <TimelineItem key={index} timelineData={item} isLastItem={index === reversedData.length - 1} />
          ))
        ) : (
          <p>No timeline data available.</p>
        )}
      
    </div>
  );
}

function TimelineItem({ timelineData, isLastItem }) {
  return (
    <div className="flex flex-col">

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{timelineData.timeline_date}</h1>
        <p className="text-sm text-justify">{timelineData.timeline_description}</p>
      </div>

        {/* if its the last item of array, dont render the line */}
        {!isLastItem && (
          <div className="flex justify-center border-l-2 border-slate-500 h-10 mx-auto my-2"></div>
        )}
      
    </div>
  )}

