import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lulu-bg border-t border-lulu-ink/5 pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter mb-8 block">
              lululemon
            </Link>
            <p className="text-sm text-lulu-muted max-w-[200px] leading-relaxed">
              Performance wear for the modern mover, designed with intent and engineered for life.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-8 text-lulu-ink/40">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/shop?category=Women" className="hover:text-lulu-muted transition-colors">Women</Link></li>
              <li><Link to="/shop?category=Men" className="hover:text-lulu-muted transition-colors">Men</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-lulu-muted transition-colors">Accessories</Link></li>
              <li><Link to="/shop" className="hover:text-lulu-muted transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-8 text-lulu-ink/40">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-lulu-muted transition-colors">About Us</Link></li>
              <li><Link to="/community" className="hover:text-lulu-muted transition-colors">Community</Link></li>
              <li><Link to="/careers" className="hover:text-lulu-muted transition-colors">Careers</Link></li>
              <li><Link to="/impact" className="hover:text-lulu-muted transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-8 text-lulu-ink/40">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/help" className="hover:text-lulu-muted transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="hover:text-lulu-muted transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-lulu-muted transition-colors">Contact Us</Link></li>
              <li><Link to="/account" className="hover:text-lulu-muted transition-colors">My Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lulu-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:opacity-50 transition-opacity"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:opacity-50 transition-opacity"><Facebook className="w-5 h-5" /></a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold text-lulu-muted">
            <span className="text-lulu-ink/30">© {currentYear} lululemon ATHLETICA</span>
            <Link to="/privacy" className="hover:text-lulu-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-lulu-ink transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-lulu-ink transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
