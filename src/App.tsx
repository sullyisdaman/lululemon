import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Community from './pages/Community';
import About from './pages/About';
import CartSidebar from './components/CartSidebar';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Simple cart logic
  const addToCart = (product: any) => {
    setCartItems(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cartItems.length} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

        <AnimatePresence>
          {isCartOpen && (
            <CartSidebar 
              items={cartItems} 
              onClose={() => setIsCartOpen(false)} 
              onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

