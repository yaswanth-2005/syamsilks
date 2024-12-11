"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";

const categories = [
  {
    name: "Shirts",
    image: "/placeholder.svg?height=400&width=600",
    link: "/explore/men/shirts",
  },
  {
    name: "Phants",
    image: "/placeholder.svg?height=400&width=600",
    link: "/explore/men/phants",
  },
];

export default function ExplorePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-purple-50">
        <Header />
        <main className="container mx-auto px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#e4322c] mb-12 text-center font-mono"
          >
            Explore Mens Collection
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={`${category.name} collection`}
                        className="w-full h-[300px] object-cover transition duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 hover:bg-opacity-30 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">
                          {category.name}
                        </h2>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Link href={category.link} className="w-full">
                      <Button className="w-full bg-[#4c2c6e] hover:bg-purple-950 text-white">
                        Explore {category.name} Collection
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
