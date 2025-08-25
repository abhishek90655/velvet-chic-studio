import { Leaf, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf size={32} />,
      title: 'Sustainability',
      description: 'We believe in responsible fashion that respects both people and planet.'
    },
    {
      icon: <Users size={32} />,
      title: 'Community',
      description: 'Supporting artisans and communities through fair trade and ethical practices.'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality',
      description: 'Uncompromising attention to detail in every piece we create.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-8">Our Story</h1>
            <p className="text-elegant text-xl">
              Founded on the belief that fashion should be both beautiful and responsible, 
              ATELIER creates timeless pieces that transcend trends and seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-section mb-6">Our Mission</h2>
              <p className="text-elegant mb-6">
                We create clothing that stands the test of time, both in style and construction. 
                Our mission is to offer an alternative to fast fashion through carefully 
                considered designs that celebrate craftsmanship and sustainability.
              </p>
              <p className="text-elegant">
                Every piece in our collection is thoughtfully designed to form the foundation 
                of a conscious wardrobe, where quality triumphs over quantity and style 
                transcends the ephemeral nature of trends.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop"
                alt="Artisan at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Our Values</h2>
            <p className="text-elegant max-w-2xl mx-auto">
              These principles guide every decision we make, from design conception 
              to the final stitch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-elegant">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566470937690-62c003633c5c?w=800&h=600&fit=crop"
                alt="Sustainable materials"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-section mb-6">Sustainable Practices</h2>
              <p className="text-elegant mb-6">
                Sustainability isn't just a buzzword for us—it's woven into the very 
                fabric of our brand. We source materials responsibly, work with ethical 
                manufacturers, and design pieces built to last.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-elegant">Organic and recycled materials wherever possible</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-elegant">Zero-waste pattern making and production</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-elegant">Fair wages and safe working conditions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-elegant">Carbon-neutral shipping and packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section mb-6">Meet the Team</h2>
          <p className="text-elegant mb-12 max-w-2xl mx-auto">
            Our diverse team of designers, artisans, and sustainability experts 
            share a common passion for creating beautiful, responsible fashion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sofia Chen',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
              },
              {
                name: 'Marcus Williams',
                role: 'Head of Sustainability',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Lead Designer',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden hover-lift">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground font-inter text-sm tracking-wide uppercase">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;