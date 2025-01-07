"use client";

import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center gap-2 group">
      <CircleArrowLeft size={20} />{" "}
      <span className="block text-lg group-hover:translate-x-1 transition-all">Back</span>
    </button>
  );
};

export default Back;
