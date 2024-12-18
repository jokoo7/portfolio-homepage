import React from "react";

interface TimelineItem {
  year: string;
  title: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2003",
    title: "Born in Siak, Riau, Indonesia.",
  },
  {
    year: "2010",
    title: "Studying at SDS PT Kimia Tirta Utama, Koto Gasib.",
  },
  {
    year: "2016",
    title: "Studying at MTS Bustnul Ulum, Dayun.",
  },
  {
    year: "2018",
    title: "Studying at MA Bustnul Ulum, Dayun.",
  },
  {
    year: "2021",
    title:
      "Studying at STAI Sultan Syarif Hasyim Siak Sri Indrapura, Program at Islamic Religious Education ",
  },
  {
    year: "2023",
    title: "Working as a freelancer",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative w-fit overflow-hidden space-y-4">
      {timelineData.map((item, index) => (
        <div key={index} className="gap-4 flex items-start">
          <div className="w-16 text-left text-muted-foreground">
            <div className="font-bold">{item.year}</div>
          </div>
          <div className="relative flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary border-4 border-white">
            <div className="absolute -z-50 left-1/2 transform -translate-x-1/2 h-[1000px] w-0.5 bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className="w-full">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
