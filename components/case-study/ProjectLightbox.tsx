"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
}

export default function ProjectLightbox({
  images,
}: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src={image}
              alt=""
              width={800}
              height={600}
              className="transition duration-700 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({
          src: img,
        }))}
      />
    </>
  );
}