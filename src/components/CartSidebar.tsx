import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';

interface CartSidebarProps {
  items: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export default function CartSidebar({ items, onClose, onRemove }: CartSidebarProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-md bg-lulu-bg h-full flex flex-col shadow-2xl shadow-black/20"
      >
        <div className="flex items-center justify-between p-6 border-b border-lulu-ink/5">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-medium">Your Bag ({items.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-lulu-ink/5 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p>Your bag is currently empty.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex space-x-4">
                <div className="w-24 h-32 bg-lulu-muted/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base leading-tight uppercase tracking-wide">{item.name}</h3>
                    <p className="text-xs text-lulu-muted mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display font-semibold">${item.price}</span>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-xs underline opacity-50 hover:opacity-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-lulu-ink/5 bg-lulu-bg">
            <div className="flex justify-between items-end mb-6">
              <span className="text-xs uppercase font-semibold text-lulu-muted">Estimated Total</span>
              <span className="text-2xl font-display font-bold">${total}</span>
            </div>
            <button className="w-full bg-lulu-ink text-white py-4 rounded-full font-bold uppercase tracking-widest hover:scale-[0.98] transition-transform active:scale-[0.95]">
              Checkout Now
            </button>
            <p className="text-[10px] text-center mt-4 text-lulu-muted uppercase tracking-widest">
              Free shipping on all orders over $75
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
