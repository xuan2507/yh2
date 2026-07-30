import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, MapPin, Calendar, Ruler, User, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'renovation', label: 'Renovation' },
];

const projects = [
  {
    id: 1,
    title: 'Hauraki Cliff House',
    category: 'residential',
    location: 'Auckland, New Zealand',
    year: '2024',
    area: '4,200 sq ft',
    status: 'Completed',
    client: 'Private Family',
    architect: 'Sarah Chen',
    description: 'A cantilevered coastal residence perched above the Hauraki Gulf, designed to capture panoramic sea views while sheltering from prevailing winds. The home features a double-height living space with floor-to-ceiling glazing, a sculptural concrete fireplace, and a seamless indoor-outdoor kitchen that opens to an infinity-edge terrace.',
    challenge: 'The site presented significant engineering challenges due to its steep gradient and exposure to salt-laden winds. The solution was a split-level design that follows the natural contour, with bedrooms nestled into the hillside and living spaces projecting toward the water.',
    outcome: 'The completed home achieves a 7-star energy rating through passive solar design, cross-ventilation, and a 15kW solar array. The clients report that the house stays comfortable year-round without air conditioning.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
    ],
    floorplan: 'rectangular',
    testimonial: 'Working with the xuantelier team transformed our vision into something beyond what we imagined. The way the house captures light throughout the day is simply magical.',
    testimonialAuthor: 'James & Rebecca Morrison',
  },
  {
    id: 2,
    title: 'Tribeca Loft Conversion',
    category: 'renovation',
    location: 'New York, NY',
    year: '2024',
    area: '2,800 sq ft',
    status: 'Completed',
    client: 'Art Collector',
    architect: 'Elena Vasquez',
    description: 'A full renovation of a 1920s warehouse loft into a refined living gallery. Original timber beams and cast-iron columns were restored and celebrated, while new insertions — a steel-and-glass mezzanine, a sculptural kitchen island, and a floating staircase — create dialogue between industrial heritage and contemporary living.',
    challenge: 'The client required museum-quality lighting and climate control for their art collection without compromising the raw character of the loft. We integrated concealed LED tracks within the beam structure and designed a zoned HVAC system with whisper-quiet operation.',
    outcome: 'The loft now hosts regular private viewings and has been featured in Architectural Digest. The open plan accommodates both intimate family living and large-scale entertaining.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ab?w=1200&h=800&fit=crop',
    ],
    floorplan: 'open',
    testimonial: 'Elena understood that this wasn\'t just a renovation — it was creating a home that could also be a gallery. Every decision respected both purposes.',
    testimonialAuthor: 'Marcus Chen, Collector',
  },
  {
    id: 3,
    title: 'Oslo Fjord House',
    category: 'residential',
    location: 'Oslo, Norway',
    year: '2023',
    area: '3,100 sq ft',
    status: 'Completed',
    client: 'Nordic Living',
    architect: 'Sarah Chen',
    description: 'A timber-clad family home overlooking the Oslofjord, designed around the principles of Nordic simplicity and biophilic connection. The house is organized around a central atrium with a living tree, bringing natural light deep into the plan and creating a constant reminder of the changing seasons.',
    challenge: 'Norwegian building codes require extreme insulation and airtightness, which can create stale interior environments. We designed a hybrid ventilation system combining heat recovery with operable skylights and a central chimney effect.',
    outcome: 'The house maintains 21°C year-round with minimal energy input. The central atrium has become the family\'s favorite gathering space, with the tree now reaching the second floor.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    ],
    floorplan: 'lshape',
    testimonial: 'We wanted a home that felt connected to the fjord in every season. This house delivers that connection while being incredibly comfortable and efficient.',
    testimonialAuthor: 'The Hansen Family',
  },
  {
    id: 4,
    title: 'Kinfolk Café',
    category: 'commercial',
    location: 'Melbourne, Australia',
    year: '2024',
    area: '1,600 sq ft',
    status: 'Completed',
    client: 'Kinfolk Collective',
    architect: 'Elena Vasquez',
    description: 'A community-focused café and event space in a heritage-listed warehouse. The design preserves the original sawtooth roof and exposed brick while inserting a warm timber interior landscape of booth seating, communal tables, and a central coffee bar.',
    challenge: 'Heritage restrictions prevented changes to the facade and roof structure. All services — lighting, HVAC, acoustics — had to be integrated within the existing envelope without visible ductwork or conduit.',
    outcome: 'The café has become a neighborhood institution, hosting community events, local art exhibitions, and pop-up markets. Revenue exceeded projections by 40% in the first year.',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    ],
    floorplan: 'rectangular',
    testimonial: 'The space has a soul that you feel the moment you walk in. Our customers constantly ask who designed it.',
    testimonialAuthor: 'Tom Wright, Kinfolk Founder',
  },
  {
    id: 5,
    title: 'Desert Modern Retreat',
    category: 'hospitality',
    location: 'Palm Springs, CA',
    year: '2024',
    area: '3,400 sq ft',
    status: 'Completed',
    client: 'Desert Modern Group',
    architect: 'Sarah Chen',
    description: 'A boutique vacation compound of three pavilions arranged around a central courtyard pool. Rammed earth walls provide thermal mass and visual warmth, while clerestory windows frame views of the San Jacinto Mountains. Each pavilion contains a bedroom suite with its own outdoor shower garden.',
    challenge: 'The desert climate demands extreme thermal performance — 45°C summer days and near-freezing winter nights. The rammed earth walls, combined with deep overhangs and a reflective roof, maintain interior comfort without mechanical cooling for much of the year.',
    outcome: 'The retreat maintains a 95% occupancy rate year-round and has been featured in Travel + Leisure. Guests consistently cite the thermal comfort and connection to landscape as standout features.',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop',
    ],
    floorplan: 'courtyard',
    testimonial: 'Sarah created a space that feels both luxurious and deeply connected to the desert. Our guests never want to leave.',
    testimonialAuthor: 'David Park, Desert Modern Group',
  },
  {
    id: 6,
    title: 'Kyoto Machiya Restoration',
    category: 'renovation',
    location: 'Kyoto, Japan',
    year: '2023',
    area: '1,800 sq ft',
    status: 'Completed',
    client: 'Private Client',
    architect: 'Kenji Tanaka',
    description: 'The sensitive restoration of a 120-year-old machiya townhouse in the Gion district. Original hinoki cypress ceilings, shoji screens, and tsuboniwa courtyard gardens were meticulously restored. A new steel-frame extension houses a contemporary kitchen and bath while respecting the traditional proportions.',
    challenge: 'Kyoto\'s strict heritage guidelines required that all visible materials be traditional. Modern services — insulation, plumbing, electrics — were threaded through concealed channels behind restored plaster surfaces.',
    outcome: 'The machiya now operates as a luxury guesthouse, offering visitors an authentic living experience in one of Kyoto\'s most historic neighborhoods. It has a 4.97 rating across all booking platforms.',
    images: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop',
    ],
    floorplan: 'machiya',
    testimonial: 'Kenji preserved the soul of our family home while making it comfortable for modern life. The balance is perfect.',
    testimonialAuthor: 'Yuki Nakamura, Owner',
  },
  {
    id: 7,
    title: 'Shoreditch Penthouse',
    category: 'residential',
    location: 'London, UK',
    year: '2024',
    area: '1,900 sq ft',
    status: 'Completed',
    client: 'East End Developments',
    architect: 'Elena Vasquez',
    description: 'A luxury penthouse atop a converted Victorian warehouse in Shoreditch. The design celebrates the building\'s industrial heritage with exposed brick walls, steel beams, and original timber floors, contrasted against bespoke walnut cabinetry, marble bathrooms, and a private rooftop terrace with skyline views.',
    challenge: 'The existing roof structure could not support a traditional garden terrace. We designed a lightweight aluminum planter system with integrated drainage and an automated irrigation system that adds only 85kg/m² of load.',
    outcome: 'All units sold within two weeks of launch at 15% above market rate. The penthouse set a new price record for the postcode.',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    ],
    floorplan: 'rectangular',
    testimonial: 'Elena created a home that feels both grand and intimate. The terrace is our favorite place in the city.',
    testimonialAuthor: 'The Whitfield Family',
  },
  {
    id: 8,
    title: 'Marbella Hillside Villa',
    category: 'residential',
    location: 'Marbella, Spain',
    year: '2023',
    area: '6,500 sq ft',
    status: 'Completed',
    client: 'Costa Developments',
    architect: 'Sarah Chen',
    description: 'A Mediterranean modern villa cascading down a steep hillside toward the sea. The design features white-rendered volumes that appear to float above the landscape, connected by glass bridges and shaded loggias. An infinity pool merges visually with the Mediterranean beyond.',
    challenge: 'The 35-degree slope required extensive retaining structures. We used terraced construction to minimize excavation, with each level opening to its own garden terrace. Stormwater is harvested and reused for irrigation.',
    outcome: 'The villa achieved LEED Platinum certification — the first in the region. It has been featured in multiple international design publications.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    ],
    floorplan: 'terraced',
    testimonial: 'The house disappears into the hillside during the day and glows like a lantern at night. It\'s exactly what we envisioned.',
    testimonialAuthor: 'Carlos Mendez, Costa Developments',
  },
];

function FloorplanSVG({ type }) {
  const plans = {
    rectangular: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="80" y="65" textAnchor="middle" className="text-[10px] fill-current opacity-60">Living</text>
        <rect x="140" y="20" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="65" textAnchor="middle" className="text-[10px] fill-current opacity-60">Dining</text>
        <rect x="260" y="20" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="320" y="65" textAnchor="middle" className="text-[10px] fill-current opacity-60">Kitchen</text>
        <rect x="20" y="140" width="180" height="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="110" y="210" textAnchor="middle" className="text-[10px] fill-current opacity-60">Master Suite</text>
        <rect x="200" y="140" width="180" height="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="290" y="175" textAnchor="middle" className="text-[10px] fill-current opacity-60">Bedroom 2</text>
        <rect x="200" y="210" width="180" height="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="290" y="245" textAnchor="middle" className="text-[10px] fill-current opacity-60">Bedroom 3</text>
        <line x1="140" y1="20" x2="140" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="260" y1="20" x2="260" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="120" x2="380" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="140" x2="200" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="210" x2="380" y2="210" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    open: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="360" height="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="90" textAnchor="middle" className="text-[10px] fill-current opacity-60">Open Living / Gallery</text>
        <rect x="20" y="170" width="170" height="110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="105" y="225" textAnchor="middle" className="text-[10px] fill-current opacity-60">Master Suite</text>
        <rect x="190" y="170" width="100" height="110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="240" y="225" textAnchor="middle" className="text-[10px] fill-current opacity-60">Study</text>
        <rect x="290" y="170" width="90" height="110" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="335" y="225" textAnchor="middle" className="text-[10px] fill-current opacity-60">Guest</text>
        <line x1="20" y1="160" x2="380" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="190" y1="170" x2="190" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="290" y1="170" x2="290" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    lshape: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <polyline points="20,20 380,20 380,160 220,160 220,280 20,280 20,20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="120" y="80" textAnchor="middle" className="text-[10px] fill-current opacity-60">Living</text>
        <rect x="220" y="20" width="160" height="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="300" y="90" textAnchor="middle" className="text-[10px] fill-current opacity-60">Kitchen / Dining</text>
        <rect x="20" y="160" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="120" y="220" textAnchor="middle" className="text-[10px] fill-current opacity-60">Bedroom Wing</text>
        <line x1="220" y1="20" x2="220" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="140" x2="220" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    courtyard: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="140" y="100" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="150" textAnchor="middle" className="text-[10px] fill-current opacity-60">Courtyard</text>
        <rect x="20" y="20" width="120" height="260" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="80" y="150" textAnchor="middle" className="text-[10px] fill-current opacity-60">Pavilion 1</text>
        <rect x="260" y="20" width="120" height="260" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="320" y="150" textAnchor="middle" className="text-[10px] fill-current opacity-60">Pavilion 2</text>
        <rect x="140" y="20" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="60" textAnchor="middle" className="text-[10px] fill-current opacity-60">Entry</text>
        <rect x="140" y="200" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="240" textAnchor="middle" className="text-[10px] fill-current opacity-60">Pavilion 3</text>
      </svg>
    ),
    machiya: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="80" y="55" textAnchor="middle" className="text-[10px] fill-current opacity-60">Tsuboniwa</text>
        <rect x="20" y="100" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="80" y="135" textAnchor="middle" className="text-[10px] fill-current opacity-60">Tatami Room</text>
        <rect x="20" y="180" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="80" y="225" textAnchor="middle" className="text-[10px] fill-current opacity-60">Bedroom</text>
        <rect x="140" y="20" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="75" textAnchor="middle" className="text-[10px] fill-current opacity-60">Living</text>
        <rect x="260" y="20" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="320" y="75" textAnchor="middle" className="text-[10px] fill-current opacity-60">Dining</text>
        <rect x="140" y="140" width="240" height="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="260" y="210" textAnchor="middle" className="text-[10px] fill-current opacity-60">Kitchen / Bath Extension</text>
        <line x1="140" y1="20" x2="140" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="260" y1="20" x2="260" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="180" x2="140" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="140" y1="140" x2="380" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    terraced: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="20" y="20" width="360" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="55" textAnchor="middle" className="text-[10px] fill-current opacity-60">Level 3 — Master Suite</text>
        <rect x="20" y="100" width="360" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="135" textAnchor="middle" className="text-[10px] fill-current opacity-60">Level 2 — Living / Kitchen</text>
        <rect x="20" y="180" width="360" height="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="225" textAnchor="middle" className="text-[10px] fill-current opacity-60">Level 1 — Entry / Guest / Pool</text>
        <line x1="20" y1="100" x2="380" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="180" x2="200" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  };

  return plans[type] || plans.rectangular;
}

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-paper min-h-screen">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-paper border border-line flex items-center justify-center text-stone hover:text-ink transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[21/9] overflow-hidden">
          <img src={project.images[imgIndex]} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:left-16">
            <span className="text-[10px] tracking-[0.2em] uppercase text-paper/60 block mb-2">{project.category}</span>
            <h2 className="font-serif text-paper text-[clamp(2rem,5vw,4rem)] leading-[1.05]">{project.title}</h2>
          </div>
          {/* Image nav */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button onClick={() => setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)} className="w-10 h-10 bg-paper/80 flex items-center justify-center hover:bg-paper transition-all">
              <ChevronLeft className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </button>
            <button onClick={() => setImgIndex((i) => (i + 1) % project.images.length)} className="w-10 h-10 bg-paper/80 flex items-center justify-center hover:bg-paper transition-all">
              <ChevronRight className="w-4 h-4 text-ink" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
          {/* Project info grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-line">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.15em] uppercase text-stone">Location</span>
              </div>
              <p className="text-sm text-ink">{project.location}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.15em] uppercase text-stone">Year</span>
              </div>
              <p className="text-sm text-ink">{project.year}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.15em] uppercase text-stone">Area</span>
              </div>
              <p className="text-sm text-ink">{project.area}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.15em] uppercase text-stone">Status</span>
              </div>
              <p className="text-sm text-ink">{project.status}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h3 className="font-serif text-xl text-ink mb-4">Overview</h3>
                <p className="text-stone text-sm leading-[1.9]">{project.description}</p>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="font-serif text-xl text-ink mb-4">The Challenge</h3>
                <p className="text-stone text-sm leading-[1.9]">{project.challenge}</p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="font-serif text-xl text-ink mb-4">The Outcome</h3>
                <p className="text-stone text-sm leading-[1.9]">{project.outcome}</p>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="font-serif text-xl text-ink mb-6">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden group cursor-pointer" onClick={() => setImgIndex(i)}>
                      <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floorplan */}
              <div>
                <h3 className="font-serif text-xl text-ink mb-6">Floor Plan</h3>
                <div className="border border-line p-8 bg-paper">
                  <div className="max-w-md mx-auto text-stone">
                    <FloorplanSVG type={project.floorplan} />
                  </div>
                  <p className="text-center text-xs text-stone mt-4">Schematic floor plan — not to scale</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="border border-line p-6">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone mb-4">Project Team</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone">Client</span>
                    <span className="text-sm text-ink">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone">Architect</span>
                    <span className="text-sm text-ink">{project.architect}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone">Category</span>
                    <span className="text-sm text-ink capitalize">{project.category}</span>
                  </div>
                </div>
              </div>

              {project.testimonial && (
                <div className="border border-line p-6">
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone mb-4">Client Testimonial</h4>
                  <blockquote className="text-sm text-ink leading-[1.8] italic mb-4">
                    "{project.testimonial}"
                  </blockquote>
                  <p className="text-xs text-stone">— {project.testimonialAuthor}</p>
                </div>
              )}

              <Link
                to="/professionals"
                className="block w-full py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all text-center"
              >
                Connect with an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Selected Works</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Projects that</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">define place</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              A curated portfolio of residential, commercial, and hospitality projects from the xuantelier network. Each project represents a collaboration between our AI design platform and world-class architects and designers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <button
            onClick={() => setSelectedProject(projects[0])}
            className="w-full group text-left relative overflow-hidden"
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={projects[0].images[0]}
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 md:left-16 right-8">
              <span className="text-[10px] tracking-[0.2em] uppercase text-paper/60 block mb-2">Featured Project</span>
              <h2 className="font-serif text-paper text-3xl md:text-4xl mb-2">{projects[0].title}</h2>
              <p className="text-paper/70 text-sm">{projects[0].location} · {projects[0].year} · {projects[0].area}</p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-paper/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5 text-ink" strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 text-[11px] tracking-[0.1em] uppercase border transition-all ${
                  activeCategory === cat.id
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line text-stone hover:border-stone hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-line">
            {filtered.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`bg-paper group text-left relative overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-stone block mb-2">{project.category}</span>
                      <h3 className="font-serif text-ink text-xl md:text-2xl mb-1">{project.title}</h3>
                      <p className="text-stone text-sm">{project.location} · {project.year} · {project.area}</p>
                    </div>
                    <div className="w-10 h-10 border border-line flex items-center justify-center text-stone group-hover:border-stone group-hover:text-ink transition-all flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/01 By Numbers</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '120+', label: 'Projects Completed' },
              { value: '14', label: 'Countries' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '45', label: 'Design Awards' },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-serif text-4xl md:text-6xl text-paper block">{stat.value}</span>
                <span className="text-stone text-xs mt-3 block tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/02 Customer Stories</span>
          <h2 className="font-serif text-ink leading-[1.05] mb-16">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Real homes,</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">real transformations</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-line">
            {[
              {
                before: 'https://images.pexels.com/photos/6489108/pexels-photo-6489108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                after: 'https://images.pexels.com/photos/5824525/pexels-photo-5824525.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                client: 'The Morrison Family',
                project: 'Hauraki Cliff House',
                quote: 'The AI design captured exactly the coastal warmth we wanted. Walking through the 3D render before construction started gave us complete confidence.',
              },
              {
                before: 'https://images.pexels.com/photos/5998136/pexels-photo-5998136.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                after: 'https://images.pexels.com/photos/6489120/pexels-photo-6489120.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                client: 'Marcus Chen',
                project: 'Tribeca Loft Conversion',
                quote: 'Elena and the xuantelier team turned a raw warehouse into a living gallery. Every visualization matched the final result down to the material finishes.',
              },
              {
                before: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                after: 'https://images.pexels.com/photos/5824531/pexels-photo-5824531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                client: 'The Hansen Family',
                project: 'Oslo Fjord House',
                quote: 'We wanted a home that felt connected to the fjord in every season. The visualization showed us exactly how light would move through the atrium before we broke ground.',
              },
            ].map((story, i) => (
              <div key={i} className="bg-paper p-6 md:p-8">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={story.before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 text-[9px] tracking-[0.15em] uppercase text-paper bg-ink/70 px-1.5 py-0.5">Before</div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={story.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 text-[9px] tracking-[0.15em] uppercase text-ink bg-paper/90 px-1.5 py-0.5">After</div>
                  </div>
                </div>
                <blockquote className="text-sm text-ink leading-[1.8] italic mb-4">"{story.quote}"</blockquote>
                <p className="text-xs text-stone mb-1">{story.client}</p>
                <p className="text-[10px] text-stone tracking-wide">{story.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-ink leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Have a project</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">in mind?</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Connect with our network of verified architects, designers, and contractors to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/design-studio"
              className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-3 group"
            >
              Start with AI Design
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </Link>
            <Link
              to="/professionals"
              className="px-10 py-4 border border-line hover:border-ink text-ink text-[11px] tracking-[0.12em] uppercase transition-all"
            >
              Find an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
