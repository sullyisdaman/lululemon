import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.lululemon.com/is/image/lululemon/NA_Mar24_W_Leggings_Story_1_1_D_Main?wid=1600&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Hero Workout" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 px-6 lg:px-12 w-full max-w-screen-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              Move with <br /> Intent.
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90 mb-10 max-w-lg leading-relaxed">
              Premium performance wear designed for the calm of yoga and the energy of the run. Engineered for life in motion.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/shop" className="bg-white text-lulu-ink px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform text-center">
                Shop New Arrivals
              </Link>
              <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-colors">
                Explore Collections
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof Ticker */}
      <div className="bg-lulu-ink text-white py-4 overflow-hidden border-y border-white/10">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap px-6 uppercase text-[10px] tracking-[0.2em] font-bold opacity-80">
          <span>AS SEEN IN VOGUE</span>
          <span className="w-1.5 h-1.5 bg-lulu-sage rounded-full" />
          <span>RATED 4.9/5 BY 50,000+ CUSTOMERS</span>
          <span className="w-1.5 h-1.5 bg-lulu-sage rounded-full" />
          <span>FREE SHIPPING OVER $75</span>
          <span className="w-1.5 h-1.5 bg-lulu-sage rounded-full" />
          <span>ETHICALLY SOURCED FABRICS</span>
          <span className="w-1.5 h-1.5 bg-lulu-sage rounded-full" />
          {/* Duplicate for seamless scroll */}
          <span>AS SEEN IN VOGUE</span>
          <span className="w-1.5 h-1.5 bg-lulu-sage rounded-full" />
          <span>RATED 4.9/5 BY 50,000+ CUSTOMERS</span>
        </div>
      </div>

      {/* 3. Category Discovery */}
      <section className="px-6 lg:px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/shop?category=Women" className="group relative h-[600px] overflow-hidden rounded-3xl">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/na_feb24_W_yoga_align_det_1_1_D_Main?wid=1200&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="Women's Collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-display font-bold">Women</h2>
              <div className="mt-4 flex items-center text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
          <Link to="/shop?category=Men" className="group relative h-[600px] overflow-hidden rounded-3xl">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/na_feb24_M_train_abc_det_1_1_D_Main?wid=1200&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="Men's Collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-display font-bold">Men</h2>
              <div className="mt-4 flex items-center text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Best Sellers */}
      <section className="px-6 lg:px-12 py-24 border-t border-lulu-ink/5 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">Popular Favorites</span>
              <h2 className="text-4xl font-display font-bold mt-2">Best Sellers</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest underline underline-offset-8">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Lifestyle Storytelling */}
      <section className="py-24 bg-lulu-bg">
        <div className="px-6 lg:px-12 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 rounded-[3rem] overflow-hidden aspect-square">
             <img src="https://images.lululemon.com/is/image/lululemon/na_feb24_Yoga_1_1_D_Main?wid=800&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" alt="Meditation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="md:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-lulu-muted">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-8 leading-[1.1]">
              Engineered <br /> for Calm.
            </h2>
            <p className="text-lg text-lulu-ink/70 leading-relaxed mb-10">
              We believe that what you wear in your most active moments should feel like a second skin. Our fabrics are developed through years of technological research to ensure that your gear works as hard as you do, while feeling as soft as a breath.
            </p>
            <Link to="/about" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest">
              Read Our Process <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Email Capture */}
      <section className="px-6 lg:px-12 py-32 bg-lulu-ink text-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Community</h2>
          <p className="text-lg opacity-70 mb-10">Sign up for early access to product drops, events, and community fitness classes.</p>
          <form className="relative max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/5 border border-white/20 rounded-full py-5 px-8 outline-none focus:border-white/40 transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-white text-lulu-ink px-8 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-lulu-sage transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
