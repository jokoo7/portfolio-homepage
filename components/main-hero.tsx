import * as React from 'react';

export default function MainHero({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-b-4xl bg-white px-[20px] pt-[115px] pb-[100px] md:rounded-b-[70px] md:px-[40px] md:pt-[155px] md:pb-[80px] lg:px-[100px] lg:pt-[130px] lg:pb-[150px]">
      {children}
    </div>
  );
}
