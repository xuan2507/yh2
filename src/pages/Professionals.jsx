import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, MapPin, Phone, Mail, Check, Building2, Home, Trees, Hammer, Paintbrush, Ruler, Lightbulb, HardHat, ClipboardList, Waves, Wrench } from 'lucide-react';

const professionalCategories = [
  { id: 'all', label: 'All Experts', icon: null },
  { id: 'property', label: 'Property Agents', icon: Home },
  { id: 'architect', label: 'Architects', icon: Building2 },
  { id: 'interior', label: 'Interior Designers', icon: Paintbrush },
  { id: 'landscape', label: 'Landscapers', icon: Trees },
  { id: 'contractor', label: 'Contractors', icon: Hammer },
  { id: 'engineer', label: 'Engineers', icon: Ruler },
  { id: 'specialist', label: 'Specialists', icon: Lightbulb },
];

const professionals = [
  {
    id: 1,
    name: 'Dictator Mbappe',
    title: 'Senior Property Consultant',
    category: 'property',
    company: 'Prestige Realty Group',
    location: 'Kuala Lumpur, Malaysia',
    rating: 4.9,
    reviews: 128,
    projects: 340,
    experience: '12 years',
    specialties: ['Luxury Homes', 'Investment Properties', 'New Developments'],
    description: 'Dictator specializes in matching clients with properties that align with their lifestyle and investment goals. His deep market knowledge and negotiation skills have saved clients an average of 8% below listing price.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
    phone: '+60 12-345 6789',
    email: 'dictator@prestigerealty.com',
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Licensed Architect',
    category: 'architect',
    company: 'Chen & Associates Architects',
    location: 'Singapore',
    rating: 4.8,
    reviews: 96,
    projects: 85,
    experience: '15 years',
    specialties: ['Residential Design', 'Sustainable Architecture', 'Heritage Renovation'],
    description: 'Sarah leads a boutique practice focused on homes that respond to their climate and context. Her designs emphasize natural ventilation, passive cooling, and materials that age gracefully in tropical conditions.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop',
    phone: '+65 9123 4567',
    email: 'sarah@chenarchitects.sg',
    verified: true,
  },
  {
    id: 3,
    name: 'Elena Vasquez',
    title: 'Principal Interior Designer',
    category: 'interior',
    company: 'Vasquez Studio',
    location: 'Madrid, Spain',
    rating: 4.9,
    reviews: 156,
    projects: 210,
    experience: '10 years',
    specialties: ['Luxury Interiors', 'Material Curation', 'Art Procurement'],
    description: 'Elena creates interiors that feel collected rather than decorated. Her signature approach combines vintage finds with contemporary pieces, resulting in spaces that are deeply personal and effortlessly elegant.',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=400&h=400&fit=crop',
    phone: '+34 612 345 678',
    email: 'elena@vasquezstudio.es',
    verified: true,
  },
  {
    id: 4,
    name: 'Kenji Tanaka',
    title: 'Landscape Architect',
    category: 'landscape',
    company: 'Tanaka Garden Design',
    location: 'Tokyo, Japan',
    rating: 4.7,
    reviews: 74,
    projects: 120,
    experience: '18 years',
    specialties: ['Japanese Gardens', 'Rooftop Landscapes', 'Native Planting'],
    description: 'Kenji trained under a master gardener in Kyoto before establishing his own practice. His landscapes blur the boundary between architecture and nature, creating outdoor rooms that evolve with the seasons.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop',
    phone: '+81 90-1234-5678',
    email: 'kenji@tanakagarden.jp',
    verified: true,
  },
  {
    id: 5,
    name: 'Erling Haaland',
    title: 'General Contractor',
    category: 'contractor',
    company: 'Haaland Construction',
    location: 'Dublin, Ireland',
    rating: 4.8,
    reviews: 203,
    projects: 180,
    experience: '20 years',
    specialties: ['Full Renovations', 'Extensions', 'Heritage Restoration'],
    description: 'Erling\'s team is known for finishing on time and on budget — a rarity in construction. His transparent pricing and weekly progress reports keep clients informed and confident throughout the build process.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop',
    phone: '+353 87 123 4567',
    email: 'erling@haalandconstruction.ie',
    verified: true,
  },
  {
    id: 6,
    name: 'Dr. Priya Sharma',
    title: 'Structural Engineer',
    category: 'engineer',
    company: 'Sharma Structural Consultants',
    location: 'Mumbai, India',
    rating: 4.9,
    reviews: 112,
    projects: 290,
    experience: '14 years',
    specialties: ['Seismic Design', 'Structural Retrofitting', 'High-Rise Buildings'],
    description: 'Dr. Sharma ensures that beautiful designs are also structurally sound. Her expertise in seismic-resistant design is particularly valued in earthquake-prone regions, where safety cannot be compromised.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
    phone: '+91 98-7654-3210',
    email: 'priya@sharmastructural.in',
    verified: true,
  },
  {
    id: 7,
    name: 'James Wilson',
    title: 'M&E Engineer',
    category: 'engineer',
    company: 'Wilson Building Services',
    location: 'London, UK',
    rating: 4.6,
    reviews: 68,
    projects: 150,
    experience: '11 years',
    specialties: ['HVAC Design', 'Electrical Systems', 'Smart Building Integration'],
    description: 'James designs the invisible systems that make buildings comfortable and efficient. His forward-thinking approach integrates renewable energy and smart home technology from the earliest design stages.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop',
    phone: '+44 7700 900123',
    email: 'james@wilsonbuildingservices.co.uk',
    verified: true,
  },
  {
    id: 8,
    name: 'Lisa Thompson',
    title: 'Quantity Surveyor',
    category: 'specialist',
    company: 'Thompson Cost Management',
    location: 'Sydney, Australia',
    rating: 4.7,
    reviews: 89,
    projects: 200,
    experience: '13 years',
    specialties: ['Cost Planning', 'Tender Management', 'Value Engineering'],
    description: 'Lisa helps clients understand exactly what their project will cost before a single brick is laid. Her detailed cost plans eliminate surprises and ensure budgets are realistic from day one.',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=400&fit=crop',
    phone: '+61 412 345 678',
    email: 'lisa@thompsoncost.com.au',
    verified: true,
  },
  {
    id: 9,
    name: 'David Park',
    title: 'Project Manager',
    category: 'specialist',
    company: 'Park Project Management',
    location: 'Seoul, South Korea',
    rating: 4.8,
    reviews: 134,
    projects: 95,
    experience: '16 years',
    specialties: ['Residential Projects', 'Design-Build', 'Timeline Optimization'],
    description: 'David is the conductor who keeps every project running smoothly. He coordinates architects, contractors, and suppliers so clients can focus on the exciting decisions while he handles the logistics.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop',
    phone: '+82 10-1234-5678',
    email: 'david@parkpm.kr',
    verified: true,
  },
  {
    id: 10,
    name: 'Rachel Green',
    title: 'Smart Home Specialist',
    category: 'specialist',
    company: 'Green Home Automation',
    location: 'Austin, Texas, USA',
    rating: 4.9,
    reviews: 178,
    projects: 320,
    experience: '9 years',
    specialties: ['Home Automation', 'Security Systems', 'Energy Management'],
    description: 'Rachel transforms houses into intelligent homes. From automated lighting scenes to integrated security and climate control, she designs systems that are powerful yet intuitive to use.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop',
    phone: '+1 (512) 234-5678',
    email: 'rachel@greenhomeauto.com',
    verified: true,
  },
  {
    id: 11,
    name: 'Marco Rossi',
    title: 'Pool & Outdoor Living Designer',
    category: 'landscape',
    company: 'Rossi Outdoor Living',
    location: 'Marbella, Spain',
    rating: 4.7,
    reviews: 92,
    projects: 140,
    experience: '17 years',
    specialties: ['Infinity Pools', 'Outdoor Kitchens', 'Terrace Design'],
    description: 'Marco designs outdoor spaces that rival the finest interiors. His infinity pools and outdoor kitchens have become the centerpiece of luxury villas across the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=400&h=400&fit=crop',
    phone: '+34 623 456 789',
    email: 'marco@rossioutdoor.es',
    verified: true,
  },
  {
    id: 12,
    name: 'Yuki Nakamura',
    title: 'Renovation Specialist',
    category: 'contractor',
    company: 'Nakamura Renovations',
    location: 'Osaka, Japan',
    rating: 4.8,
    reviews: 156,
    projects: 260,
    experience: '14 years',
    specialties: ['Kitchen Renovation', 'Bathroom Remodeling', 'Space Optimization'],
    description: 'Yuki specializes in transforming outdated spaces into modern, functional homes. His team is known for meticulous dust control and completing kitchen renovations in as little as two weeks.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    phone: '+81 80-8765-4321',
    email: 'yuki@nakamurareno.jp',
    verified: true,
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Tell us your project',
    desc: 'Share your vision, budget, and timeline. Our AI matches you with the right experts for your specific needs.',
  },
  {
    step: '02',
    title: 'Review your matches',
    desc: 'Browse curated profiles of verified professionals with portfolios, reviews, and transparent pricing.',
  },
  {
    step: '03',
    title: 'Connect directly',
    desc: 'Reach out to your chosen experts. No middlemen, no markups — just direct communication from day one.',
  },
  {
    step: '04',
    title: 'Build with confidence',
    desc: 'Every professional in our network is vetted, insured, and backed by our satisfaction guarantee.',
  },
];

export default function Professionals() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPro, setSelectedPro] = useState(null);

  const filtered = activeCategory === 'all'
    ? professionals
    : professionals.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Expert Network</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">The right expert,</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">every project</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Buying a home? Building from scratch? Renovating a kitchen? Our curated network of verified property agents, architects, contractors, and specialists helps you find the perfect partner for every phase of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop"
              alt="Architecture and Design Professionals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/01 How It Works</span>
          <div className="grid md:grid-cols-4 gap-12">
            {howItWorks.map((h) => (
              <div key={h.step} className="border-t border-line pt-8">
                <span className="font-serif text-5xl text-line block mb-6">/{h.step}</span>
                <h3 className="font-serif text-lg text-ink mb-3">{h.title}</h3>
                <p className="text-stone text-sm leading-[1.8]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-10 pb-12 border-t border-line pt-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {professionalCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 text-[11px] tracking-[0.1em] uppercase border transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line text-stone hover:border-stone hover:text-ink'
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" strokeWidth={1.5} />}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.15em] uppercase text-stone mb-6">
            {filtered.length} expert{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {filtered.map((pro) => (
              <div key={pro.id} className="bg-paper group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {pro.verified && (
                      <span className="text-[9px] tracking-[0.1em] uppercase text-paper bg-ink/70 px-2 py-1 flex items-center gap-1">
                        <Check className="w-3 h-3" strokeWidth={1.5} /> Verified
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-ink text-base">{pro.name}</h3>
                      <p className="text-stone text-xs mt-0.5">{pro.title}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-stone fill-stone" />
                      <span className="text-xs text-stone">{pro.rating}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone tracking-wide mb-3">{pro.company}</p>
                  <p className="text-xs text-stone leading-relaxed mb-4 line-clamp-3">{pro.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pro.specialties.slice(0, 2).map((s) => (
                      <span key={s} className="px-2 py-1 border border-line text-[9px] tracking-[0.08em] uppercase text-stone">
                        {s}
                      </span>
                    ))}
                    {pro.specialties.length > 2 && (
                      <span className="px-2 py-1 border border-line text-[9px] tracking-[0.08em] uppercase text-stone">
                        +{pro.specialties.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-stone mb-4">
                    <MapPin className="w-3 h-3" strokeWidth={1.5} />
                    {pro.location}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedPro(pro)}
                      className="py-2.5 border border-line hover:border-ink text-ink text-[10px] tracking-[0.1em] uppercase transition-all"
                    >
                      View Profile
                    </button>
                    <a
                      href={`mailto:${pro.email}`}
                      className="py-2.5 bg-ink hover:bg-stone text-paper text-[10px] tracking-[0.1em] uppercase transition-all text-center flex items-center justify-center gap-1"
                    >
                      <Mail className="w-3 h-3" strokeWidth={1.5} /> Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-stone text-sm">No experts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/02 Join the Network</span>
          <h2 className="font-serif text-paper leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Are you a design or</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">building professional?</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Join our curated network and connect with homeowners who are actively looking for your expertise. We verify every professional to maintain the highest standards.
          </p>
          <Link to="/about" className="px-10 py-4 bg-paper hover:bg-paper/90 text-ink text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-3 group">
            Apply to Join
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Professional Detail Modal */}
      {selectedPro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={() => setSelectedPro(null)} />
          <div className="relative bg-paper w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-line">
            <button
              onClick={() => setSelectedPro(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-paper border border-line flex items-center justify-center text-stone hover:text-ink transition-colors"
            >
              ×
            </button>

            <div className="aspect-[16/9] relative overflow-hidden">
              <img src={selectedPro.image} alt={selectedPro.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  {selectedPro.verified && (
                    <span className="text-[9px] tracking-[0.1em] uppercase text-paper bg-ink/70 px-2 py-1 flex items-center gap-1">
                      <Check className="w-3 h-3" strokeWidth={1.5} /> Verified
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-2xl text-white">{selectedPro.name}</h2>
                <p className="text-white/70 text-sm">{selectedPro.title} — {selectedPro.company}</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-line">
                <div className="text-center">
                  <span className="font-serif text-2xl text-ink block">{selectedPro.rating}</span>
                  <span className="text-[10px] text-stone">Rating</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-2xl text-ink block">{selectedPro.projects}</span>
                  <span className="text-[10px] text-stone">Projects</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-2xl text-ink block">{selectedPro.experience}</span>
                  <span className="text-[10px] text-stone">Experience</span>
                </div>
                <div className="text-center">
                  <span className="font-serif text-2xl text-ink block">{selectedPro.reviews}</span>
                  <span className="text-[10px] text-stone">Reviews</span>
                </div>
              </div>

              <p className="text-sm text-stone leading-[1.9] mb-8">{selectedPro.description}</p>

              <div className="mb-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-3">Specialties</span>
                <div className="flex flex-wrap gap-2">
                  {selectedPro.specialties.map((s) => (
                    <span key={s} className="px-3 py-1.5 border border-line text-[11px] text-stone">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-3">Location</span>
                <div className="flex items-center gap-2 text-sm text-ink">
                  <MapPin className="w-4 h-4 text-stone" strokeWidth={1.5} />
                  {selectedPro.location}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${selectedPro.email}`}
                  className="flex-1 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.5} /> Send Email
                </a>
                <a
                  href={`tel:${selectedPro.phone}`}
                  className="flex-1 py-4 border border-line hover:border-ink text-ink text-[11px] tracking-[0.12em] uppercase transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} /> Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
