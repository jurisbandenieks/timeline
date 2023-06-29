import React, { useEffect } from "react";

interface ScrollRotatorProps {
  children: React.ReactNode;
}

const ScrollRotator: React.FC<ScrollRotatorProps> = ({ children }) => {
  const handleScroll = (e: WheelEvent) => {
    const delta = e.deltaY || e.detail;
    const rotatedDelta = -delta;

    // Conditionally call preventDefault
    if (e.cancelable) {
      e.preventDefault();
    }

    const newEvent = new WheelEvent(e.type, {
      ...e,
      deltaY: rotatedDelta,
      detail: rotatedDelta
    });

    e.target?.dispatchEvent(newEvent);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default ScrollRotator;
