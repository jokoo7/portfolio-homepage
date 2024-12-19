import React from "react";

const page = () => {
  return (
    <div className="wrapper mt-20">
      <div className="grid grid-cols-4 gap-4">
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-background">
          background
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-foreground text-red-500">
          foreground
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-primary">
          primary
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-primary-foreground text-red-500">
          primary-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-card">
          card
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-card-foreground text-red-500">
          card-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-popover">
          popover
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-popover-foreground text-red-500">
          popover-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-secondary">
          secondary
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-secondary-foreground text-red-500">
          secondary-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-muted">
          muted
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-muted-foreground">
          mutrd-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-accent">
          accent
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-accent-foreground text-red-500">
          accent-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-destructive">
          destructive
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-destructive-foreground">
          destructive-f
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-border">
          border
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-input">
          input
        </div>
        <div className="w-full aspect-square flex justify-center items-center border-2 rounded-md bg-ring">
          ring
        </div>
      </div>
    </div>
  );
};

export default page;
