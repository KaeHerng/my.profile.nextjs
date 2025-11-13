'use client';

import { Trash2, Plus, Minus, PlusCircle, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AddToCartPage() {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleQuantity = (id: number, type: 'increase' | 'decrease') => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQty = type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    updateQuantity(id, newQty);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 pb-28">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* ===== Header ===== */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            🛒 Your Cart
          </h1>
          <button
            onClick={() => router.push('/Page/products')}
            className="
              flex items-center gap-2
              bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600
              text-white font-semibold
              px-5 py-2.5
              rounded-full
              shadow-lg
              transform transition
              hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-indigo-400
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-blue-300
            "
          >
            <PlusCircle size={20} /> Add More Products
          </button>
        </div>

        {/* ===== Cart Items ===== */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <Image src="/asset/empty-cart.svg" alt="Empty Cart" width={180} height={180} />
            <p className="mt-5 text-lg font-medium">Your cart is empty 😢</p>
            <button
              onClick={() => router.push('/Page/products')}
              className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="space-y-4"
            transition={{ layout: { duration: 0.3, type: 'spring' } }}
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={128}
                  height={128}
                  className="object-cover rounded-l-2xl"
                />
                <div className="flex-1 p-5 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-500 mt-1">RM{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center border rounded-xl overflow-hidden">
                      <button
                        onClick={() => handleQuantity(item.id, 'decrease')}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 font-semibold text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantity(item.id, 'increase')}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ===== Fixed Bottom Bar ===== */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-xl border-t border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto sm:left-1/2 sm:-translate-x-1/2 rounded-t-2xl">
          <div className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <ShoppingBag size={22} className="text-green-500" />
            Total: <span className="text-green-600">RM{totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => router.push('/checkout')}
            className="
              mt-3 sm:mt-0
              px-6 py-3
              bg-gradient-to-r from-green-500 via-emerald-400 to-green-500
              text-white font-semibold uppercase tracking-wide
              rounded-2xl shadow-lg
              transform transition-all
              hover:scale-105 hover:shadow-2xl
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-300
            "
          >
            💳 Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
