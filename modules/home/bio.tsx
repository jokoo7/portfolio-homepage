"use client";

import Section from "@/components/section";
import Timeline from "@/components/timeline";
import React from "react";

const Bio = () => {
  return (
    <Section delay={0.5}>
      <h3 className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight">Bio</h3>
      <div className="w-full mt-4">
        <Timeline />
      </div>
    </Section>
  );
};

export default Bio;
