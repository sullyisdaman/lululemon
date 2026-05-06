import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { motion, useScroll, useTransform } from 'motion/react';
import { Plus, Minus, Star, ArrowRight, Shield, RefreshCcw, Truck } from 'lucide-react';
import { cn } from '../lib/utils';
import ProductCard from '../components/ProductCard';

interface PDPProps {
  onAddToCart: (p: Product) => void;
}

export default function ProductDetail({ onAddToCart }: PDPProps) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'details' | 'fabric' | 'care'>('details');

  const sizes = [0, 2, 4, 6, 8, 10, 12, 14];

  if (!product) return <div className="pt-32 text-center">Product not found.</div>;

  const relatedItems = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto lg:flex pt-20 lg:pt-0">
        
        {/* Left: Product Images */}
        <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-1 lg:h-screen lg:overflow-y-auto no-scrollbar lg:sticky lg:top-0">
          {product.images.map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden bg-lulu-bg">
              <img src={img} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
          {/* Duplicating for length/visual impact */}
          <div className="aspect-[3/4] overflow-hidden bg-lulu-bg">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover grayscale brightness-90" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-lulu-bg">
            <img src={product.images[1] || product.images[0]} alt={product.name} className="w-full h-full object-cover blur-sm opacity-50" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-[40%] px-6 py-12 lg:px-16 lg:py-32 flex flex-col">
          <div className="mb-4">
             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">{product.category}</span>
             <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 leading-tight">
               {product.name}
             </h1>
             <div className="mt-4 flex items-center space-x-4">
                <p className="text-xl font-display font-semibold">${product.price}</p>
                <div className="h-4 w-[1px] bg-lulu-ink/10" />
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#FFB800]">
                  <Star className="w-4 h-4 fill-current mr-1" /> 4.9 (124 reviews)
                </div>
             </div>
          </div>

          <p className="text-lulu-ink/70 leading-relaxed mb-10 text-sm sm:text-base">
            {product.description}
          </p>

          <div className="space-y-10">
            {/* Color Selector */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest">Color: <span className="text-lulu-ink/40 font-medium ml-1">{selectedColor}</span></span>
              </div>
              <div className="flex space-x-4">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all p-1",
                      selectedColor === color ? "border-lulu-ink" : "border-transparent"
                    )}
                  >
                    <div className={cn(
                      "w-full h-full rounded-full",
                      color === 'Onyx' ? "bg-zinc-900" : 
                      color === 'Sage' ? "bg-lulu-sage" : 
                      color === 'Stone' ? "bg-stone-300" : 
                      color === 'Cloud' ? "bg-zinc-100" :
                      "bg-zinc-400"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest">Select Size</span>
                <button className="text-[10px] uppercase font-bold tracking-widest underline decoration-lulu-ink/20 underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(String(size))}
                    className={cn(
                      "py-3 border-2 text-xs font-bold transition-all rounded-full",
                      selectedSize === String(size) ? "border-lulu-ink bg-lulu-ink text-white" : "border-lulu-ink/10 text-lulu-ink hover:border-lulu-ink/40"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="pt-4">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-lulu-ink text-white py-5 rounded-full font-bold uppercase tracking-widest hover:scale-[0.98] transition-all active:scale-[0.95] flex items-center justify-center space-x-3"
              >
                <Plus className="w-5 h-5" />
                <span>Add to Bag</span>
              </button>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-5 h-5 mb-2 opacity-40" />
                  <span className="text-[9px] uppercase font-bold tracking-wider opacity-60">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RefreshCcw className="w-5 h-5 mb-2 opacity-40" />
                  <span className="text-[9px] uppercase font-bold tracking-wider opacity-60">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-5 h-5 mb-2 opacity-40" />
                  <span className="text-[9px] uppercase font-bold tracking-wider opacity-60">2-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="border-t border-lulu-ink/10 pt-10">
              <div className="flex space-x-8 mb-6 border-b border-lulu-ink/5">
                {['details', 'fabric', 'care'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={cn(
                      "pb-4 text-[10px] uppercase font-bold tracking-widest transition-all relative",
                      activeTab === tab ? "text-lulu-ink" : "text-lulu-muted"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-lulu-ink" />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-sm text-lulu-ink/70 leading-relaxed min-h-[100px]">
                {activeTab === 'details' && (
                  <ul className="space-y-3">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-lulu-sage mt-2 mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'fabric' && (
                    <p>Designed with our proprietary Nulu™ fabric for a weightless feel and buttery-soft comfort. Lightweight, sweat-wicking, and breathable for high-performance use.</p>
                )}
                {activeTab === 'care' && (
                    <p>Machine wash cold with like colors. Tumble dry low or hang dry for best longevity. Do not bleach or iron.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="px-6 lg:px-12 py-32 border-t border-lulu-ink/5 bg-lulu-bg">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">Complete the look</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map(item => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
