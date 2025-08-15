import Link from 'next/link';
import * as React from 'react';
import { Paragraph } from './paragraph';

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="group cursor-pointer space-y-5">{children}</div>;
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

const CardTitle = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return (
    <Link className="h3-l block no-underline" href={path}>
      {children}
    </Link>
  );
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <Paragraph>{children}</Paragraph>;
};

export { Card, CardHeader, CardContent, CardTitle, CardDescription };
