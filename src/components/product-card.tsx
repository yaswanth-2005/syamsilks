"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  isInCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/context/cartSlice";
import { RootState } from "@/context/store";

export interface Product {
  id: string;
  name: string;
  category: "men" | "women";
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const inCart = useSelector(
    (state: { cart: { items: any[]; totalPrice: number } }) =>
      isInCart(state, product.id)
  );

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-purple-600 font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <div className="w-full">
            {!inCart ? (
              <Button
                onClick={handleAddToCart}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDecrease}
                  disabled={cartItem?.quantity === 1}
                >
                  -
                </Button>
                <span>{cartItem?.quantity}</span>
                <Button variant="outline" size="icon" onClick={handleIncrease}>
                  +
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRemoveFromCart}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
