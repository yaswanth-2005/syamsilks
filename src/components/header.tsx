"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { RootState } from "@/context/store"; // Update with your actual root state import

export default function Header() {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the total number of items in the cart
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <nav className="container px-6 py-4">
        <div className="flex justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-800">
            Syam Silks
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-purple-600 transition duration-300 max-w-fit relative"
          >
            <ShoppingCart size={24} />
            {/* Show badge if there are items in the cart */}
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
