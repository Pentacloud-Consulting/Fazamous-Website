import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface LayoutGridProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function LayoutGrid({ children, className, id }: LayoutGridProps) {
  return (
    <div
      id={id}
      className={twMerge(
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 w-full max-w-[1440px] mx-auto px-6 md:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
