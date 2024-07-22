'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

interface WindowSize {
  width: number | null;
  height: number | null;
}

const TopImage: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
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
    <div className="top-image-container">
      <Image
        src="/top_image.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="top-image"
      />
      <div className="overlay" />
    </div>
  );
};

export default TopImage;
