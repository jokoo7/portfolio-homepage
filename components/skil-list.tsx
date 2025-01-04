import { SKILS } from "@/constants/stacks";
import { JSX } from "react";

export default function SkillList() {
  const SKILSInArray: Array<[string, JSX.Element]> = Object.entries(SKILS);
  return (
    <div className="xs:col-span-4 text-sm flex flex-wrap gap-4 text-secondary">
      {SKILSInArray.map(([name, icon], index) => (
        <div key={index} className="w-fit h-fit flex gap-1 items-center">
          <div className="w-5 h-5 flex justify-center items-center">{icon}</div>
          {name}
        </div>
      ))}
    </div>
  );
}
