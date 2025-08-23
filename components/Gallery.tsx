"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/projcet pics/Backend API.png",
  "/assets/projcet pics/Backend API.png",
  "/assets/projcet pics/Backend API.png",
  "/assets/projcet pics/Backend API.png",
  "/assets/projcet pics/Backend API.png",
  "/assets/projcet pics/Backend API.png",
 
];

// Parent container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delays each child for a cascading effect
    },
  },
};

// Each card animation
const card = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -4 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Gallery = () => {
  return (
    <div className="py-20 w-full" id="gallery">
      <motion.h1
        className="heading text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My <span className="text-purple">Art Gallery</span>
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={card}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-black/5"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              {/* Image with subtle parallax effect */}
              <motion.img
                src={src}
                alt={`Artwork ${index + 1}`}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay that slides up */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end justify-center p-4"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ y: 40 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white text-lg font-semibold">
                  Artwork {index + 1}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
