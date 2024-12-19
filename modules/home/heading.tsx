"use client";

import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import React from "react";

const HomeHeading = () => {
  return (
    <>
      <Section>
        <div className="w-full space-y-2">
          <h1 className="text-center scroll-m-20 max-w-lg mx-auto text-4xl font-extrabold tracking-tight lg:text-6xl font-display">
            Hello, my name is Joko Santoso
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-2xl text-center mb-8">
            I&apos;m an Fullstack Developer based in Pekanbaru, Indonesia!
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <Button variant="link" className="text-base hover:no-underline">
            About me →
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomeHeading;
