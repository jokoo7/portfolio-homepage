"use client";

import React, { useEffect, useState } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents mismatches by skipping render on the server

  return (
    <div className="flex items-center gap-0.5">
      <span className={`scroll-m-20 text-xl font-bold tracking-tight mt-0.5`}>Joko Santoso</span>
    </div>
  );
};

export default Logo;
