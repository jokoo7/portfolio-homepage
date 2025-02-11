"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Copy, SquareArrowOutUpRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Contact = {
  id: number;
  label: string;
  icon: ReactNode;
  value: string;
  href: string;
};

type IProps = {
  data: Contact;
};

const CardContact = ({ data }: IProps) => {
  const { href, value, icon, label } = data;
  const [isClipboard, setIsClipboard] = useState(false);
  const { toast } = useToast();

  return (
    <div className="flex h-max w-full items-center justify-between border bg-opacity-40 bg-gradient-to-br p-4  border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950">
      <div className="flex gap-3 items-center">
        {icon}
        <div className="flex flex-col">
          <span className="inline-block text-sm text-neutral-600 dark:text-neutral-400">{label}</span>
          <div className="flex gap-2 items-center">
            <span className="inline-block">{value}</span>
            <div
              onClick={() => {
                navigator.clipboard.writeText(value);
                setIsClipboard(true);
                toast({
                  description: "Success copy.",
                });
                setTimeout(() => {
                  setIsClipboard(false);
                }, 2000);
              }}
              className="cursor-pointer w-6 aspect-square flex justify-center items-center"
            >
              {isClipboard ? (
                <Check size={18} strokeWidth={3} className="text-green-500" />
              ) : (
                <Copy size={16} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Link target="_blank" href={href} className="flex items-center gap-1 hover:underline">
        <SquareArrowOutUpRight className="text-neutral-600 dark:text-neutral-400" />
      </Link>
    </div>
  );
};

export default CardContact;
