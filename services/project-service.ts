import { SKILS_PROJECTS } from "@/constants/stacks";
import { JSX } from "react";

export const dbToStack = (numbers: string[]): JSX.Element[] => {
  if (!Array.isArray(numbers)) {
    console.warn("Invalid techStack:", numbers);
    return [];
  }
  return numbers.map((number) => SKILS_PROJECTS[Number(number)]);
};
