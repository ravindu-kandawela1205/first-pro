import { useState, useEffect } from "react";

const ScreenSizeIndicator = () => {
  const [size, setSize] = useState({ width: 0, height: 0, breakpoint: "" });

  const getBreakpoint = (width) => {
    if (width >= 1536) return "2xl";
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    if (width >= 640) return "sm";
    return "xs"; // below sm
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth),
      });
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-xl shadow-lg text-sm">
      <p>
        Screen: {size.width} × {size.height}
      </p>
      <p>Breakpoint: {size.breakpoint}</p>
    </div>
  );
};

export default ScreenSizeIndicator;