'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ProductModal from '@/components/Modal/ProductModal';
import Pagination from '@/components/pagination';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  images: string[];
}

interface SliderProps {
  images: string[];
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 4,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 6,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 7,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 8,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 9,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 10,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 11,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 12,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 13,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 14,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 15,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 16,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 17,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 18,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 19,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 20,
    name: 'aaaaaaaaa',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 21,
    name: 'bbbbbbbbbbb',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 22,
    name: 'ccccccccccccc',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 23,
    name: 'dddddddddddd',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 24,
    name: 'eeeeeeeeeeeeee',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 25,
    name: 'ffffffffffs',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 26,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 27,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 28,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 29,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 30,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 31,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 32,
    name: 'asdasdwqqwwww',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 33,
    name: 'cvvvvvvvvvvvvvvvvv',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 34,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 35,
    name: 'Bsadaweqeqwdsasda',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 36,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 37,
    name: '131452444',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 38,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 39,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 40,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 41,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 42,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 43,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 44,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 45,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 46,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 47,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 48,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },{
    id: 49,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: 99,
    desc: 'Noise cancelling over-ear headphones.',
    images: ['/asset/headphone1.png', '/asset/headphone2.webp'],
  },
  {
    id: 50,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: 59,
    desc: 'High-precision RGB gaming mouse.',
    images: ['/asset/mouse1.png', '/asset/mouse2.jpg', '/asset/mouse3.webp'],
  },
  {
    id: 51,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    desc: 'Tactile switches and RGB lighting.',
    images: ['/asset/keyboard1.png', '/asset/keyboard2.jpg'],
  },
  {
    id: 52,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 199,
    desc: 'Track health and notifications easily.',
    images: ['/images/products/smartwatch1.jpg', '/images/products/smartwatch2.jpg'],
  },
  {
    id: 53,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79,
    desc: 'Portable, waterproof Bluetooth speaker.',
    images: ['/asset/Speaker1.webp', '/asset/Speaker1.png', '/asset/Speaker3.avif'],
  },
  {
    id: 54,
    name: '4K Monitor',
    category: 'Displays',
    price: 299,
    desc: 'Ultra HD monitor with vivid colors.',
    images: ['/asset/monitor1.png', '/asset/monitor2.webp'],
  },
  
];

// ===== Swipeable Image Slider Component =====
function ImageSlider({ images }: SliderProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Update width on mount & resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    handleResize(); // 初始获取
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-72 overflow-hidden rounded-t-2xl">
      {width > 0 && (
        <motion.div
          className="flex h-full cursor-grab select-none"
          drag="x"
          dragConstraints={{ left: -width * (images.length - 1), right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50 && index < images.length - 1) setIndex(index + 1)
            else if (info.offset.x > 50 && index > 0) setIndex(index - 1)
          }}
          animate={{ x: -index * width }}
          transition={{ type: 'tween', duration: 0.3 }}
          dragElastic={0.2}
          dragMomentum={false}
          whileTap={{ cursor: 'grabbing' }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0 select-none">
              <img src={img} alt={`slide-${i}`} className="w-full h-full object-cover select-none" draggable={false}/>
            </div>
          ))}
        </motion.div>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ===== Main Products Page =====
export default function ProductsPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // 默认每页显示 6 个

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // 当前页显示的 products
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* <h1 className="text-3xl font-bold text-gray-900 tracking-tight">🛍️ Product Showcase</h1> */}

        {/* ===== Header: Title + Add to Cart Button ===== */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">🛍️ Product Showcase</h1>
          <button
            onClick={() => router.push('/Page/addtoCart')}
            className="
              relative overflow-hidden rounded-xl
              px-6 py-3
              bg-gradient-to-r from-green-500 via-green-400 to-green-500
              text-white font-semibold uppercase tracking-wide
              shadow-lg shadow-green-300/30
              transform transition-all
              hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-300
            ">
            <span className="relative z-10">🛒 Go to Cart</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 rounded-xl pointer-events-none animate-pulse-slow"></span>
          </button>
        </div>

        {/* ===== Search + Filter + Items per page ===== */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2.5 w-full sm:w-2/3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="All">All Categories</option>
            <option value="Audio">Audio</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearables">Wearables</option>
            <option value="Displays">Displays</option>
          </select>

          {/* 每页显示数量选择 */}
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // 改变每页数量后回到第一页
            }}
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
            <option value={50}>50 / page</option>
          </select>
        </div>

        {/* ===== Product Grid ===== */}
        {currentProducts.length === 0 ? (
          <p className="text-gray-500 italic text-center mt-10">No products found 🤷‍♂️</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer flex flex-col overflow-hidden"
              >
                <ImageSlider images={product.images} />

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-blue-600 font-semibold text-lg">RM{product.price}</p>
                    <div className='flex flex-col md:flex-row gap-1'>
                        <button
                          className="bg-blue-600 text-white rounded-lg py-1 px-2 text-sm font-medium hover:bg-blue-700 transition cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(product);
                          }}
                        >
                          View Details
                        </button>
                        <button
                          className="bg-green-600 text-white rounded-lg py-1 px-2 text-sm font-medium hover:bg-green-700 transition cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              images: product.images,
                            });
                          }}
                        >
                          Add to Cart
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== Pagination ===== */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* ===== Product Modal ===== */}
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      </div>
    </div>
  );
}