"use client";

import Section from "@/components/section";
import Timeline from "@/components/timeline";
import { gabarito } from "@/lib/fonts";
import React from "react";

const Bio = () => {
  return (
    <Section delay={0.5}>
      <h3 className={`mt-4 scroll-m-20 text-3xl font-semibold tracking-tight ${gabarito.className}`}>
        Bio
      </h3>
      <div className="w-full mt-4">
        <Timeline />
      </div>
    </Section>
  );
};

export default Bio;
