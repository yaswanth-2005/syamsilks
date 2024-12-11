"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  category: "men" | "women";
  price: number;
  image: string;
}

const dummyProducts: Product[] = [
  {
    id: "men-phant-1",
    name: "Men Phant 1",
    category: "men",
    price: 1000,
    image: "#",
  },
  {
    id: "men-phant-2",
    name: "Men Phant 2",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-phant-3",
    name: "Men Phant 3",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-phant-4",
    name: "Men Phant 3",
    category: "men",
    price: 5000,
    image: "#",
  },
  {
    id: "men-phant-5",
    name: "Men Phant 3",
    category: "men",
    price: 5000,
    image: "#",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "men" | "women"
  >("all");

  const filteredProducts =
    selectedCategory === "all"
      ? dummyProducts
      : dummyProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-purple-50">
        <Header />
        <main className="container mx-auto px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#e4322c] mb-8 text-center font-mono"
          >
            Phants Collection
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
