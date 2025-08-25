import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'Women',
      description: 'Timeless elegance meets modern sophistication',
      imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
      itemCount: '24 pieces'
    },
    {
      id: 2,
      title: 'Men',
      description: 'Contemporary classics for the modern gentleman',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      itemCount: '18 pieces'
    },
    {
      id: 3,
      title: 'Accessories',
      description: 'Curated details that complete your look',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop',
      itemCount: '12 pieces'
    },
    {
      id: 4,
      title: 'Outerwear',
      description: 'Essential layers for every season',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop',
      itemCount: '16 pieces'
    },
    {
      id: 5,
      title: 'Essentials',
      description: 'Foundational pieces for your wardrobe',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop',
      itemCount: '20 pieces'
    },
    {
      id: 6,
      title: 'Limited Edition',
      description: 'Exclusive pieces for discerning tastes',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop',
      itemCount: '8 pieces'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-hero mb-6">Collections</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Discover our carefully curated collections, each telling a unique story 
            of contemporary design and timeless craftsmanship.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group cursor-pointer overflow-hidden bg-card rounded-lg shadow-sm hover-lift"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.imageUrl}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-sm tracking-wide uppercase">
                        Explore Collection
                      </span>
                      <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-xl font-semibold">{collection.title}</h3>
                    <span className="font-inter text-xs text-muted-foreground tracking-wide uppercase">
                      {collection.itemCount}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section mb-6">Stay Updated</h2>
          <p className="text-elegant mb-8 max-w-md mx-auto">
            Be the first to know about new collections and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded font-inter text-sm"
            />
            <button className="btn-hero">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;