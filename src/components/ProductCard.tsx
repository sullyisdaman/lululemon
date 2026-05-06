import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { cn } from '../lib/utils';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  className?: string;
}

export default function ProductCard({ product, onAddToCart, className }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-2xl bg-lulu-muted/5">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-white text-lulu-ink text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            New
          </span>
        )}

        <button 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="absolute bottom-4 right-4 bg-lulu-ink text-white p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Plus className="w-5 h-5" />
        </button>
      </Link>

      <Link to={`/product/${product.id}`} className="mt-4 block">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-lulu-ink/80 group-hover:text-lulu-ink transition-colors">
              {product.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-lulu-muted mt-1">{product.category}</p>
          </div>
          <span className="font-display font-semibold text-sm sm:text-base">${product.price}</span>
        </div>
        
        <div className="flex space-x-1.5 mt-3">
          {product.colors.map((color) => (
            <div 
              key={color} 
              className={cn(
                "w-2.5 h-2.5 rounded-full border border-lulu-ink/10",
                color === 'Onyx' ? "bg-zinc-900" : 
                color === 'Sage' ? "bg-lulu-sage" : 
                color === 'Stone' ? "bg-stone-300" : 
                color === 'Cloud' ? "bg-zinc-100" :
                "bg-zinc-400"
              )}
              title={color}
            />
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
