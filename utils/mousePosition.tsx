"use client";

import { IMousePosition } from "@/lib/types";
import { useEffect, useState } from "react";

export function useMousePosition(): IMousePosition {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}
