"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Elegant Silk Saree",
    price: "$299",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Silk Kurta Set",
    price: "$199",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Silk Scarf",
    price: "$59",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: "$89",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#e4322c] mb-12 font-mono">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4c2c6e] hover:bg-purple-950 text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
