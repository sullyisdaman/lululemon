import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('Featured');

  const filteredProducts = useMemo(() => {
    let result = products;
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sortBy === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, sortBy]);

  const categories = ['All', 'Women', 'Men', 'Accessories'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">Collections</span>
        <h1 className="text-5xl font-display font-bold mt-2">
          {categoryFilter === 'All' ? 'Every Movement' : categoryFilter}
        </h1>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-lulu-ink/5 mb-12 gap-6">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              className={cn(
                "text-xs uppercase font-bold tracking-widest transition-all whitespace-nowrap",
                categoryFilter === cat ? "opacity-100 underline underline-offset-8" : "opacity-40 hover:opacity-70"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-8 w-full md:w-auto">
          <div className="relative group flex-grow md:flex-grow-0">
            <button className="flex items-center justify-between w-full md:w-48 px-4 py-2 text-xs font-bold uppercase tracking-widest border border-lulu-ink/10 rounded-full hover:bg-lulu-ink hover:text-white transition-all">
              Sort: {sortBy} <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-lulu-ink/10 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 overflow-hidden">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSortBy(opt)}
                  className="w-full text-left px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-lulu-bg transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
          </button>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-lulu-muted">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
