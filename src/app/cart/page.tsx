"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/context/cartSlice";
import { RootState } from "@/context/store"; // Update with your actual root state import
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const DELIVERY_FEE = 30;
const FREE_DELIVERY_THRESHOLD = 2000;

export default function CartPage() {
  const dispatch = useDispatch();

  // Get the cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQuantity(productId));
  };
  const deliveryFee =
    calculateTotal() >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = deliveryFee + calculateTotal();
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-[#e4322c]-50">
        <Header />
        <main className="container mx-auto px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#e4322c] mb-8 text-center font-mono"
          >
            Your Cart
          </motion.h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleDecreaseQuantity(item.id)}
                            disabled={item.quantity === 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600 font-semibold">Free</span>
                  ) : (
                    <span>${deliveryFee.toFixed(2)}</span>
                  )}
                </div>
                {calculateTotal() < FREE_DELIVERY_THRESHOLD && (
                  <div className="text-sm text-gray-600">
                    Add $
                    {(FREE_DELIVERY_THRESHOLD - calculateTotal()).toFixed(2)}{" "}
                    more to your order for free delivery!
                  </div>
                )}
              </div>
              <div className="mt-6 text-right">
                <p className="text-xl font-semibold">Total: ${total}</p>
              </div>
              <div className="mt-6 text-right">
                <Button className="bg-[#e4322c]-600 hover:bg-[#e4322c]-700 bg-purple-900 text-white">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
