import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold tracking-tight">
            ATELIER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter text-sm tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-inter text-sm tracking-wide uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <ShoppingBag size={20} />
                <span className="font-inter text-sm tracking-wide uppercase">Cart</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;