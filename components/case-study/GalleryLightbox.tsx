"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-8 top-8 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Previous */}
          <button
            onClick={onPrev}
            className="absolute left-6 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <ChevronLeft className="h-7 w-7 text-white" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-6 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <ChevronRight className="h-7 w-7 text-white" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] max-w-[90vw]"
          >
            <Image
              src={images[currentIndex]}
              alt="Gallery Image"
              width={1600}
              height={1000}
              className="h-auto max-h-[90vh] w-auto rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}