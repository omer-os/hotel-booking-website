"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HotelCardCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  return (
    <div>
      <AnimatePresence>
        <motion.img
          src={images[currentImage]}
          className="absolute top-0 left-0 w-full h-full rounded-xl object-cover transition-all brightness-50"
          alt={alt}
          key={images[currentImage]}
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{
            duration: .5,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      <div className="md:opacity-0 text-white group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={() => {
            setDirection("left");
            if (currentImage === 0) {
              setCurrentImage(images.length - 1);
            } else {
              setCurrentImage(currentImage - 1);
            }
          }}
          className="absolute active:scale-90 transition-all top-1/2 right-2 rounded-full bg-black/50 w-10 h-10 flex items-center justify-center"
        >
          <FiChevronRight />
        </button>

        <button
          onClick={() => {
            setDirection("right");
            if (currentImage === images.length - 1) {
              setCurrentImage(0);
            } else {
              setCurrentImage(currentImage + 1);
            }
          }}
          className="absolute active:scale-90 transition-all top-1/2 left-2 rounded-full bg-black/50 w-10 h-10 flex items-center justify-center"
        >
          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
}
