"use client";

import Section from "@/components/section";
import React from "react";

const About = () => {
  return (
    <Section delay={0.3}>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">About</h3>
      <p className="leading-6 [&:not(:first-child)]:mt-2 hyphens-auto text-justify">
        Takuya is a freelance and a full-stack developer based in Osaka with a passion for building
        digital services/stuff he wants. He has a knack for all things launching products, from planning
        and designing all the way to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He
        publishes content for marketing his products and his YouTube channel called &quot;Dev as
        Life&quot; has more than 100k subscribers.
      </p>
    </Section>
  );
};

export default About;
