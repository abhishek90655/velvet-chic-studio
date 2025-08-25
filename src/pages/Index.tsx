import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Shield } from 'lucide-react';
import heroModel from '@/assets/hero-model.jpg';

const Index = () => {
  const trendingItems = [
    {
      id: 1,
      name: 'Essential Wool Coat',
      price: 298,
      originalPrice: 398,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      tag: 'Bestseller'
    },
    {
      id: 2,
      name: 'Organic Cotton Tee',
      price: 68,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      tag: 'New'
    },
    {
      id: 3,
      name: 'Minimalist Leather Bag',
      price: 224,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
      tag: 'Limited'
    },
    {
      id: 4,
      name: 'Tailored Wide-Leg Trousers',
      price: 168,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
      tag: 'Trending'
    }
  ];

  const benefits = [
    {
      icon: <Truck size={24} />,
      title: 'Free Shipping',
      description: 'On orders over $150'
    },
    {
      icon: <RotateCcw size={24} />,
      title: '30-Day Returns',
      description: 'Easy returns & exchanges'
    },
    {
      icon: <Shield size={24} />,
      title: 'Quality Guarantee',
      description: 'Crafted to last'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroModel}
            alt="Fashion model wearing elegant minimalist clothing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="heading-hero mb-6 text-white">
              Timeless
              <span className="block">Elegance</span>
            </h1>
            <p className="text-elegant text-xl mb-8 text-white/90">
              Discover our curated collection of sustainable fashion pieces, 
              designed for the conscious modern wardrobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections" className="btn-hero">
                Shop Now
              </Link>
              <Link to="/about" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground font-inter text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Trending Now</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Discover the pieces everyone's talking about. Our trending collection 
              features the most coveted items of the season.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingItems.map((item) => (
              <div key={item.id} className="group cursor-pointer hover-lift">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-inter tracking-wide uppercase z-10">
                      {item.tag}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-playfair text-lg font-medium group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-inter font-semibold">${item.price}</span>
                    {item.originalPrice && (
                      <span className="font-inter text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections" className="btn-outline group">
              View All Collections
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-section mb-6">Crafted with Purpose</h2>
              <p className="text-elegant mb-6">
                Every piece in our collection is thoughtfully designed and ethically made. 
                We believe in slow fashion—creating beautiful, lasting garments that 
                respect both people and planet.
              </p>
              <p className="text-elegant mb-8">
                From sustainable materials to fair trade practices, we're committed 
                to transparency in every step of our process.
              </p>
              <Link to="/about" className="btn-hero">
                Learn More
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop"
                alt="Artisan crafting clothing"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section mb-6 text-primary-foreground">Stay in the Loop</h2>
          <p className="text-lg mb-8 max-w-md mx-auto opacity-90">
            Get exclusive access to new collections, styling tips, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-primary border-0 rounded font-inter text-sm"
            />
            <button className="bg-white text-primary px-8 py-3 font-inter font-medium tracking-wide uppercase text-sm rounded hover:bg-cream transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
