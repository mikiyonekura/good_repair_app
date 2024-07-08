'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const TopImage: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "98vh", overflow:'hidden'}}>
      <Image
        src="/kabe.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        style={{
          animation: "zoomInOut 10s infinite",
        }}
      />
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(255, 255, 255, 0.0)" 
      }} />
      <style jsx global>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TopImage;