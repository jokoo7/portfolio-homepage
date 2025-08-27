import * as React from 'react';
import { Paragraph } from './paragraph';
import Link from 'next/link';

const Card = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return (
    <Link
      href={path}
      className="group block h-full w-full cursor-pointer space-y-5 no-underline"
    >
      {children}
    </Link>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-2xl">
      {children}
    </div>
  );
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2.5">{children}</div>;
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-[25px] leading-[1.3em] font-medium text-black md:text-[30px]">
      {children}
    </p>
  );
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <Paragraph>{children}</Paragraph>;
};

export { Card, CardHeader, CardContent, CardTitle, CardDescription };
