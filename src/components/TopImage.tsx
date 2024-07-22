'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

const TopImage: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
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
    <div className="top-image-container">
      <Image
        src="/top_image.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="top-image"
      />
      <div className="overlay" />
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
        .top-image-container {
          position: relative;
          width: 100%;
          height: 98vh;
          overflow: hidden;
        }
        .top-image {
          animation: zoomInOut 10s infinite;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.0);
        }
        @media (max-width: 768px) {
          .top-image-container {
            height: 30vh;
          }
        }
      `}</style>
    </div>
  );
};

export default TopImage;
