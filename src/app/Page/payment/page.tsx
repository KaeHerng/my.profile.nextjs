'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export default function AnimatedList() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (item: string) => {
    setItems(items.filter(i => i !== item));
  };

  const addItem = () => {
    const fruits = ['Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];
    const next = fruits[Math.floor(Math.random() * fruits.length)];
    setItems([...items, next]);
  };

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">🍇 Animated List</h1>

      <button
        onClick={addItem}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add Random Fruit
      </button>

      <ul className="space-y-2 mt-4">
        <AnimatePresence>
          {items.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-white rounded-lg shadow flex justify-between items-center cursor-pointer"
              onClick={() => removeItem(item)}
            >
              {item}
              <span className="text-gray-400 text-sm">(click to remove)</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
