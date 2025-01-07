import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectLoading = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Skeleton className="w-full aspect-video rounded-xl"></Skeleton>
      <Skeleton className="w-full aspect-video rounded-xl"></Skeleton>
      <Skeleton className="w-full aspect-video rounded-xl"></Skeleton>
    </div>
  );
};

export default ProjectLoading;
