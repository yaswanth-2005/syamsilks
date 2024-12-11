"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import syamsilks from "@/../public/syamsilks.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-32 md:py-48 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-[#e4322c] mb-4 font-mono"
        >
          Experience the Elegance of Silk
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-700 mb-8"
        >
          Indulge in the luxury of handcrafted silk garments, woven with passion
          and tradition.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/explore">
            <Button
              size="lg"
              className="bg-[#4c2c6e]  hover:bg-purple-950 text-white"
            >
              Explore Collection
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <Image
          src={syamsilks}
          alt="Syam Silks"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-md"
        ></Image>
      </motion.div>
    </section>
  );
}
