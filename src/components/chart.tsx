import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const frontdata = [
  {
    item: "HTML",
    A: 4,
    fullMark: 5,
    
  },
  {
    item: "CSS/SCSS",
    A: 4,
    fullMark: 5,
  },
  {
    item: "JavaScript",
    A: 3,
    fullMark: 5,
  },
  {
    item: "jQuery",
    A: 4,
    fullMark: 5,
  },
  {
    item: "React",
    A: 2,
    fullMark: 5,
  },
  {
    item: "Astro",
    A: 2,
    fullMark: 5,
  }
];

const backdata = [
  {
    item: "Docker & Docker Compose",
    A: 3,
    fullMark: 6,
  },
  {
    item: "Linux",
    A: 3,
    fullMark: 6,
  },
  {
    item: "PHP",
    A: 3,
    fullMark: 6,
  },
  {
    item: "Mysql(MariaDB)",
    A: 3,
    fullMark: 6,
  },
  {
    item: "Nginx",
    A: 3,
    fullMark: 6,
  },
  {
    item: "Python",
    A: 3,
    fullMark: 6,
  },
];

export default function Chart() {
  return (
    <div className="flex skill">
      <div>
        <h3>Frontend Skills</h3>
        <RadarChart
          outerRadius={150}
          width={450}
          height={450}
          data={frontdata}
          title="Frontend"
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="item" fill="#fff" />
          <PolarRadiusAxis
            domain={[0,5]} 
            tickCount={6}
          />
          <Radar
            name="Koki Hamada"
            dataKey="A"
            stroke="#259d9f"
            fill="#259d9f"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
      <div>
        <h3>Backend & DevOps Skills</h3>
        <RadarChart
            outerRadius={150}
            width={450}
            height={450}
            data={backdata}
            title="Backend"
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="item"/>
            <PolarRadiusAxis 
              domain={[0,5]} 
              tickCount={6}
            />
            <Radar
              name="Koki Hamada"
              dataKey="A"
              stroke="#0c6294"
              fill="#0c6294"
              fillOpacity={0.6}
            />
        </RadarChart>
      </div>
      
      
  </div>
  );
}
