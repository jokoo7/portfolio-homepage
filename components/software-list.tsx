import { SOFTWARE } from "@/constants/stacks";
import { JSX } from "react";

export default function SoftwareList() {
  const softwareInArray: Array<[string, JSX.Element]> = Object.entries(SOFTWARE);

  return (
    <div className="xs:col-span-4 text-sm flex flex-wrap gap-4 text-secondary">
      {softwareInArray.map(([name, icon], index) => (
        <div key={index} className="w-fit h-fit flex gap-1 items-center">
          <div className="w-5 h-5 flex justify-center items-center">{icon}</div>
          {name}
        </div>
      ))}
    </div>
  );
}
