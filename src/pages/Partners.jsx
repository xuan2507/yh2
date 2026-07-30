import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, Truck, Shield, Star } from 'lucide-react';

const partnerBrands = [
  {
    name: 'Herman Miller',
    category: 'Furniture',
    founded: '1905',
    origin: 'USA',
    flagship: 'Eames Lounge Chair',
    description: 'Pioneers of modern office and residential furniture. Herman Miller has shaped the way people work and live for over a century, with iconic designs by Charles and Ray Eames, George Nelson, and Isamu Noguchi.',
    logo: 'H',
  },
  {
    name: 'Knoll',
    category: 'Furniture',
    founded: '1938',
    origin: 'USA',
    flagship: 'Barcelona Chair',
    description: 'Champions of modernist design. Knoll has produced furniture by Mies van der Rohe, Eero Saarinen, and Marcel Breuer, defining the visual language of the 20th century workplace and home.',
    logo: 'K',
  },
  {
    name: 'Flos',
    category: 'Lighting',
    founded: '1962',
    origin: 'Italy',
    flagship: 'Arco Floor Lamp',
    description: 'Italian lighting masters known for iconic designs by Achille Castiglioni, Philippe Starck, and Patricia Urquiola. Flos turns light into an architectural element.',
    logo: 'F',
  },
  {
    name: 'Vitra',
    category: 'Furniture',
    founded: '1950',
    origin: 'Switzerland',
    flagship: 'Eames Plastic Chair',
    description: 'Swiss manufacturer dedicated to producing authentic design classics. Vitra\'s campus in Weil am Rhein is a pilgrimage site for design enthusiasts worldwide.',
    logo: 'V',
  },
  {
    name: 'Carl Hansen & Søn',
    category: 'Furniture',
    founded: '1908',
    origin: 'Denmark',
    flagship: 'Wishbone Chair',
    description: 'Danish craftsmanship at its finest. Carl Hansen produces Hans J. Wegner\'s iconic chairs with the same hand-woven paper cord seats for over 70 years.',
    logo: 'CH',
  },
  {
    name: 'Muuto',
    category: 'Furniture',
    founded: '2006',
    origin: 'Denmark',
    flagship: 'Oslo Sofa',
    description: 'New Nordic design for the modern home. Muuto works with emerging Scandinavian designers to create furniture, lighting, and accessories that are fresh yet timeless.',
    logo: 'M',
  },
  {
    name: 'Louis Poulsen',
    category: 'Lighting',
    founded: '1874',
    origin: 'Denmark',
    flagship: 'PH5 Pendant',
    description: 'Danish lighting heritage defined by Poul Henningsen\'s glare-free philosophy. Every fixture is engineered to shape light as beautifully as the fixture itself.',
    logo: 'LP',
  },
  {
    name: 'String',
    category: 'Storage',
    founded: '1949',
    origin: 'Sweden',
    flagship: 'String Pocket',
    description: 'The original modular shelving system. Designed by Nils Strinning in 1949, String remains the gold standard for flexible, wall-mounted storage.',
    logo: 'S',
  },
  {
    name: 'Ligne Roset',
    category: 'Furniture',
    founded: '1860',
    origin: 'France',
    flagship: 'Togo Sofa',
    description: 'French luxury furniture combining comfort with avant-garde design. Family-owned for six generations, Ligne Roset collaborates with the world\'s most daring designers.',
    logo: 'LR',
  },
  {
    name: 'Artemide',
    category: 'Lighting',
    founded: '1960',
    origin: 'Italy',
    flagship: 'Tolomeo Lamp',
    description: 'Human light. Artemide designs lighting that responds to human needs — from the iconic Tolomeo task lamp to large-scale architectural installations.',
    logo: 'A',
  },
  {
    name: 'B&B Italia',
    category: 'Furniture',
    founded: '1966',
    origin: 'Italy',
    flagship: 'Camaleonda Sofa',
    description: 'Italian luxury furniture defined by innovation and research. B&B Italia pioneered cold-formed polyurethane foam technology and continues to push material boundaries.',
    logo: 'BB',
  },
  {
    name: 'HAY',
    category: 'Furniture',
    founded: '2002',
    origin: 'Denmark',
    flagship: 'About A Chair',
    description: 'Accessible Danish design for everyday life. HAY brings high-quality, contemporary furniture to a broader audience without compromising on design integrity.',
    logo: 'HAY',
  },
  {
    name: 'Fritz Hansen',
    category: 'Furniture',
    founded: '1872',
    origin: 'Denmark',
    flagship: 'Egg Chair',
    description: 'Denmark\'s oldest furniture maker, responsible for Arne Jacobsen\'s Egg and Swan chairs. Fritz Hansen represents the pinnacle of Danish modernism.',
    logo: 'FH',
  },
  {
    name: 'Kartell',
    category: 'Storage',
    founded: '1949',
    origin: 'Italy',
    flagship: 'Componibili',
    description: 'Italian plastic pioneers. Kartell transformed industrial materials into design icons, from Anna Castelli Ferrieri\'s modular storage to Philippe Starck\'s ghost chairs.',
    logo: 'K',
  },
  {
    name: 'Iittala',
    category: 'Decor',
    founded: '1881',
    origin: 'Finland',
    flagship: 'Aalto Vase',
    description: 'Finnish glassware and design objects that last a lifetime. Iittala\'s Alvar Aalto vase has been mouth-blown in the same factory since 1937.',
    logo: 'I',
  },
  {
    name: 'Alessi',
    category: 'Kitchen',
    founded: '1921',
    origin: 'Italy',
    flagship: 'Juicy Salif',
    description: 'Italian design factory collaborating with the world\'s most creative minds. Alessi transforms everyday kitchen objects into works of art.',
    logo: 'Al',
  },
  {
    name: 'Marimekko',
    category: 'Textiles',
    founded: '1951',
    origin: 'Finland',
    flagship: 'Unikko Print',
    description: 'Finnish textile and clothing brand famous for bold prints and colors. Maija Isola\'s Unikko pattern has become a global design icon.',
    logo: 'MM',
  },
  {
    name: 'Menu',
    category: 'Lighting',
    founded: '1976',
    origin: 'Denmark',
    flagship: 'Tribeca Warren Pendant',
    description: 'Danish brand balancing soft minimalism with creative experimentation. Menu collaborates with designers worldwide to create lighting, furniture, and accessories.',
    logo: 'Me',
  },
];

const benefits = [
  { icon: Globe, title: 'Global Reach', desc: 'Connect with design-conscious customers in 12 countries' },
  { icon: Truck, title: 'Integrated Logistics', desc: 'Seamless fulfillment through our marketplace infrastructure' },
  { icon: Shield, title: 'Brand Protection', desc: 'Your products showcased alongside the world\'s finest brands' },
  { icon: Star, title: 'Featured Placement', desc: 'Priority visibility in AI-generated design concepts' },
];

export default function Partners() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Partner Brands</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">The world's finest</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">design brands</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              We partner with heritage manufacturers and emerging design studios to bring authentic, high-quality products to our marketplace. Every brand is vetted for craftsmanship, sustainability, and design integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
          {[
            { value: '18', label: 'Partner Brands' },
            { value: '500+', label: 'Products Listed' },
            { value: '12', label: 'Countries' },
            { value: '2,400+', label: 'Designs Shopped' },
          ].map((stat, i) => (
            <div key={i} className="bg-paper p-10 text-center">
              <span className="font-serif text-4xl text-ink block">{stat.value}</span>
              <span className="text-stone text-sm mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/01 Why Partner With Us</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((b, i) => (
              <div key={i}>
                <b.icon className="w-6 h-6 text-stone mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-paper mb-3">{b.title}</h3>
                <p className="text-stone text-sm leading-[1.8]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/02 Our Partners</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {partnerBrands.map((brand, i) => (
              <div key={i} className="bg-paper p-10 group hover:bg-paper/80 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-line flex items-center justify-center text-stone text-sm font-serif group-hover:border-stone transition-all">
                    {brand.logo}
                  </div>
                  <span className="text-[10px] tracking-[0.1em] uppercase text-stone">{brand.category}</span>
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">{brand.name}</h3>
                <p className="text-xs text-stone mb-4">{brand.origin} — Est. {brand.founded}</p>
                <p className="text-sm text-stone leading-[1.8] mb-6">{brand.description}</p>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-stone">
                  <Check className="w-3 h-3" strokeWidth={1.5} />
                  Flagship: {brand.flagship}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-ink leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Become a</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">partner brand</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Join our curated marketplace and have your products featured in AI-generated designs. Reach customers at the exact moment they're ready to buy.
          </p>
          <div className="space-y-4 text-left max-w-md mx-auto mb-12">
            {[
              'No upfront listing fees',
              'Commission-based model',
              'Featured placement in AI designs',
              'Direct integration with visualization tools',
              'Analytics and customer insights',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-stone">
                <Check className="w-4 h-4 text-stone flex-shrink-0" strokeWidth={1.5} />
                {item}
              </div>
            ))}
          </div>
          <button className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-3 group">
            Apply as Partner
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </button>
        </div>
      </section>
    </div>
  );
}
