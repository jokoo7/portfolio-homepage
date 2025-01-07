import React from "react";
import { Skeleton } from "../ui/skeleton";

const ContactLoading = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Skeleton className="w-full h-[70px] rounded-xl"></Skeleton>
      <Skeleton className="w-full h-[70px] rounded-xl"></Skeleton>
      <Skeleton className="w-full h-[70px] rounded-xl"></Skeleton>
    </div>
  );
};

export default ContactLoading;
