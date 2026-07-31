import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, Star, MapPin, Phone, Mail, Check, ChevronLeft, ChevronRight, Quote, Calendar, Home, DollarSign, Award, X } from 'lucide-react';

const portfolioData = {
  1: {
    name: 'Dictator Mbappe',
    title: 'Senior Property Consultant',
    company: 'Prestige Realty Group',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=700&fit=crop',
    rating: 4.9,
    reviews: 128,
    projects: 340,
    experience: '12 years',
    specialties: ['Luxury Homes', 'Investment Properties', 'New Developments'],
    description: 'Dictator specializes in matching clients with properties that align with their lifestyle and investment goals. His deep market knowledge and negotiation skills have saved clients an average of 8% below listing price.',
    phone: '+60 12-345 6789',
    email: 'dictator@prestigerealty.com',
    verified: true,
    education: [
      { degree: 'BSc Real Estate Economics', school: 'University of Malaya', year: '2010' },
      { degree: 'Certified Property Manager', school: 'IREM', year: '2014' },
    ],
    awards: [
      { name: 'Top Producer Award 2023', org: 'Prestige Realty Group' },
      { name: 'Best Luxury Agent', org: 'Malaysia Property Awards', year: '2022' },
    ],
    services: [
      { name: 'Property Search & Matching', price: 'Complimentary', desc: 'Personalized property shortlist based on your criteria' },
      { name: 'Market Valuation Report', price: 'From RM 800', desc: 'Comprehensive property valuation with comparable sales' },
      { name: 'Negotiation Representation', price: '1.5% of sale price', desc: 'Full negotiation support through closing' },
      { name: 'Investment Portfolio Advisory', price: 'From RM 2,500', desc: 'Strategic property investment planning' },
    ],
    portfolio: [
      {
        title: 'The Residences at KLCC',
        location: 'Kuala Lumpur City Centre',
        type: 'Luxury Condominium',
        year: '2023',
        value: 'RM 4.2M',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
        description: 'Secured a penthouse unit for an international client at 12% below market value. Full renovation coordination included.',
        client: 'Confidential — Hedge Fund Executive',
      },
      {
        title: 'Damansara Heights Villa',
        location: 'Damansara Heights, KL',
        type: 'Bungalow',
        year: '2022',
        value: 'RM 8.5M',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        description: 'Off-market acquisition of a 12,000 sq ft bungalow with infinity pool. Closed in 21 days.',
        client: 'Tech Entrepreneur',
      },
      {
        title: 'Mont Kiara Investment Portfolio',
        location: 'Mont Kiara, KL',
        type: 'Investment Properties',
        year: '2021-2023',
        value: 'RM 15M portfolio',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        description: 'Curated and acquired 7 rental properties generating 6.2% net yield annually.',
        client: 'Family Office',
      },
      {
        title: 'Iskandar Puteri Land Acquisition',
        location: 'Johor Bahru',
        type: 'Development Land',
        year: '2023',
        value: 'RM 22M',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
        description: 'Identified and negotiated 5-acre prime development land for a boutique condominium project.',
        client: 'Regional Developer',
      },
    ],
    testimonials: [
      { name: 'Ahmad Razak', role: 'CEO, TechVenture Sdn Bhd', text: 'Dictator found us our dream home within 2 weeks. His market knowledge is unmatched — he knew about properties before they even hit the market.', rating: 5 },
      { name: 'Sarah Lim', role: 'Investment Banker', text: 'Saved me nearly RM 400,000 on my purchase. His negotiation skills are legendary for a reason.', rating: 5 },
      { name: 'The Abdullah Family', role: 'Private Clients', text: 'Handled the sale of our family estate with discretion and professionalism. The process was seamless.', rating: 5 },
    ],
  },
  2: {
    name: 'Sarah Chen',
    title: 'Licensed Architect',
    company: 'Chen & Associates Architects',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=700&fit=crop',
    rating: 4.8,
    reviews: 96,
    projects: 85,
    experience: '15 years',
    specialties: ['Residential Design', 'Sustainable Architecture', 'Heritage Renovation'],
    description: 'Sarah leads a boutique practice focused on homes that respond to their climate and context. Her designs emphasize natural ventilation, passive cooling, and materials that age gracefully in tropical conditions.',
    phone: '+65 9123 4567',
    email: 'sarah@chenarchitects.sg',
    verified: true,
    education: [
      { degree: 'Master of Architecture', school: 'National University of Singapore', year: '2008' },
      { degree: 'LEED AP BD+C', school: 'USGBC', year: '2012' },
    ],
    awards: [
      { name: 'SIA Design Award', org: 'Singapore Institute of Architects', year: '2021' },
      { name: 'BCA Green Mark Gold', org: 'Building & Construction Authority', year: '2020' },
    ],
    services: [
      { name: 'Conceptual Design', price: 'From SGD 8,000', desc: 'Initial sketches, massing studies, and 3D visualizations' },
      { name: 'Full Architectural Services', price: '8-12% of construction cost', desc: 'From schematic design to construction administration' },
      { name: 'Heritage Restoration', price: 'From SGD 15,000', desc: 'Conservation-compliant restoration of protected buildings' },
      { name: 'Sustainability Consulting', price: 'From SGD 5,000', desc: 'Green building certification and energy modeling' },
    ],
    portfolio: [
      {
        title: 'The Lantern House',
        location: 'Sentosa Cove, Singapore',
        type: 'Private Residence',
        year: '2023',
        value: 'SGD 12M',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        description: 'A courtyard house organized around a central water feature. Natural light filters through perforated screens inspired by traditional Malay carvings.',
        client: 'Private Client',
      },
      {
        title: 'Tiong Bahru Shophouse Restoration',
        location: 'Tiong Bahru, Singapore',
        type: 'Heritage Renovation',
        year: '2022',
        value: 'SGD 2.8M',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        description: 'Careful restoration of a 1930s art deco shophouse, preserving original terrazzo floors and timber shutters while inserting modern amenities.',
        client: 'Private Client',
      },
      {
        title: 'Bukit Timah Eco-Villa',
        location: 'Bukit Timah, Singapore',
        type: 'Sustainable Residence',
        year: '2021',
        value: 'SGD 6.5M',
        image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop',
        description: 'Net-zero energy home with solar integration, rainwater harvesting, and cross-ventilation eliminating the need for air conditioning.',
        client: 'Environmental NGO Director',
      },
      {
        title: 'Nassim Road Penthouse',
        location: 'Nassim Road, Singapore',
        type: 'Penthouse Renovation',
        year: '2023',
        value: 'SGD 4.2M',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Complete reimagining of a 6,000 sq ft penthouse with panoramic city views. Material palette of travertine, walnut, and bronze.',
        client: 'Private Client',
      },
    ],
    testimonials: [
      { name: 'James & Linda Wong', role: 'Homeowners', text: 'Sarah understood exactly what we wanted — a home that felt modern but connected to its tropical setting. The cross-ventilation is incredible.', rating: 5 },
      { name: 'David Koh', role: 'Property Developer', text: 'Her attention to detail and knowledge of local building codes made the entire process smooth. She thinks three steps ahead.', rating: 5 },
      { name: 'Dr. Priya Menon', role: 'Medical Director', text: 'The shophouse restoration exceeded every expectation. Sarah balanced preservation with modern living perfectly.', rating: 5 },
    ],
  },
  3: {
    name: 'Elena Vasquez',
    title: 'Principal Interior Designer',
    company: 'Vasquez Studio',
    location: 'Madrid, Spain',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1600&h=700&fit=crop',
    rating: 4.9,
    reviews: 156,
    projects: 210,
    experience: '10 years',
    specialties: ['Luxury Interiors', 'Material Curation', 'Art Procurement'],
    description: 'Elena creates interiors that feel collected rather than decorated. Her signature approach combines vintage finds with contemporary pieces, resulting in spaces that are deeply personal and effortlessly elegant.',
    phone: '+34 612 345 678',
    email: 'elena@vasquezstudio.es',
    verified: true,
    education: [
      { degree: 'MA Interior Design', school: 'Royal College of Art, London', year: '2013' },
      { degree: 'BA Fine Arts', school: 'Universidad Complutense Madrid', year: '2011' },
    ],
    awards: [
      { name: 'Best Residential Interior', org: 'Dezeen Awards', year: '2022' },
      { name: 'Emerging Designer of the Year', org: 'Elle Decor Spain', year: '2020' },
    ],
    services: [
      { name: 'Interior Concept & Mood Boards', price: 'From €3,500', desc: 'Color palettes, material selections, and furniture direction' },
      { name: 'Full Interior Design', price: 'From €25,000', desc: 'Complete design service from concept to installation' },
      { name: 'Art Curation', price: 'From €5,000', desc: 'Sourcing and commissioning artwork for your space' },
      { name: 'Furniture Procurement', price: '15% of furniture budget', desc: 'Trade pricing access and white-glove delivery coordination' },
    ],
    portfolio: [
      {
        title: 'Salamanca Penthouse',
        location: 'Madrid, Spain',
        type: 'Luxury Apartment',
        year: '2023',
        value: '€850K design budget',
        image: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=800&h=600&fit=crop',
        description: 'A 4,000 sq ft penthouse designed around the client\'s art collection. Custom plasterwork and hand-dyed silk wallpapers.',
        client: 'Art Collector',
      },
      {
        title: 'Ibiza Beach House',
        location: 'Ibiza, Spain',
        type: 'Holiday Home',
        year: '2022',
        value: '€420K design budget',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
        description: 'Relaxed Mediterranean luxury with hand-woven textiles, antique Berber rugs, and custom teak furniture.',
        client: 'Fashion Designer',
      },
      {
        title: 'Chamberi Townhouse',
        location: 'Madrid, Spain',
        type: 'Family Home',
        year: '2021',
        value: '€290K design budget',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
        description: 'A warm, layered family home mixing 1970s Italian furniture with contemporary Spanish ceramics.',
        client: 'Family of Five',
      },
      {
        title: 'Toledo Country Estate',
        location: 'Toledo, Spain',
        type: 'Rural Retreat',
        year: '2023',
        value: '€680K design budget',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        description: 'Restoration of a 16th-century finca with modern insertions. Featured in Architectural Digest Spain.',
        client: 'Film Director',
      },
    ],
    testimonials: [
      { name: 'Isabella Garcia', role: 'Gallery Owner', text: 'Elena has an extraordinary eye. She sourced a sculpture for my living room that I had been hunting for years.', rating: 5 },
      { name: 'Marco & Lucia Bianchi', role: 'Homeowners', text: 'Our home feels like a curated gallery now, but still completely livable. She understood our lifestyle perfectly.', rating: 5 },
      { name: 'Carlos Mendez', role: 'Hotelier', text: 'Elena designed our boutique hotel lobby. Guest satisfaction scores jumped 40% after the renovation.', rating: 5 },
    ],
  },
  4: {
    name: 'Kenji Tanaka',
    title: 'Landscape Architect',
    company: 'Tanaka Garden Design',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&h=700&fit=crop',
    rating: 4.7,
    reviews: 74,
    projects: 120,
    experience: '18 years',
    specialties: ['Japanese Gardens', 'Rooftop Landscapes', 'Native Planting'],
    description: 'Kenji trained under a master gardener in Kyoto before establishing his own practice. His landscapes blur the boundary between architecture and nature, creating outdoor rooms that evolve with the seasons.',
    phone: '+81 90-1234-5678',
    email: 'kenji@tanakagarden.jp',
    verified: true,
    education: [
      { degree: 'MLA Landscape Architecture', school: 'Kyoto University', year: '2005' },
      { degree: 'Apprenticeship', school: 'Ryogen-in Temple Gardens', year: '2003-2005' },
    ],
    awards: [
      { name: 'Good Design Award', org: 'Japan Institute of Design Promotion', year: '2021' },
      { name: 'Landscape Design Excellence', org: 'JLA Awards', year: '2019' },
    ],
    services: [
      { name: 'Garden Concept Design', price: 'From ¥500,000', desc: 'Master plan with plant selections and hardscape layout' },
      { name: 'Full Landscape Implementation', price: 'From ¥3M', desc: 'Complete garden construction with 2-year plant guarantee' },
      { name: 'Rooftop & Terrace Gardens', price: 'From ¥2M', desc: 'Engineered green spaces for urban environments' },
      { name: 'Seasonal Maintenance', price: 'From ¥80,000/month', desc: 'Monthly visits for pruning, feeding, and seasonal adjustments' },
    ],
    portfolio: [
      {
        title: 'Roppongi Hills Zen Garden',
        location: 'Tokyo, Japan',
        type: 'Corporate Rooftop',
        year: '2023',
        value: '¥45M',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop',
        description: 'A 2,000 sq m rooftop moss garden with dry waterfall, tea pavilion, and seasonal maple plantings.',
        client: 'Mori Building Co.',
      },
      {
        title: 'Karuizawa Mountain Retreat',
        location: 'Karuizawa, Japan',
        type: 'Private Estate',
        year: '2022',
        value: '¥28M',
        image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=600&fit=crop',
        description: '5-acre forest garden integrating native azaleas, ferns, and a koi pond with natural spring feed.',
        client: 'Tech CEO',
      },
      {
        title: 'Kamakura Courtyard House',
        location: 'Kamakura, Japan',
        type: 'Residential Garden',
        year: '2021',
        value: '¥12M',
        image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=600&fit=crop',
        description: 'Intimate courtyard garden with raked gravel, specimen pine, and bamboo grove visible from every room.',
        client: 'Private Client',
      },
      {
        title: 'Osaka Commercial Plaza',
        location: 'Osaka, Japan',
        type: 'Public Landscape',
        year: '2023',
        value: '¥62M',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop',
        description: 'Biophilic plaza design with 200+ native species, rain gardens, and pedestrian-first pathways.',
        client: 'Mitsubishi Estate',
      },
    ],
    testimonials: [
      { name: 'Yuki Sato', role: 'Homeowner', text: 'Kenji transformed our small Tokyo courtyard into a meditation space. Every season brings something new.', rating: 5 },
      { name: 'Robert Chen', role: 'Architect', text: 'Collaborating with Kenji is a masterclass in restraint. He knows exactly when to add and when to leave alone.', rating: 5 },
      { name: 'Emiko Tanaka', role: 'Hotel Owner', text: 'Our guests specifically mention the garden in reviews. It has become the signature of our property.', rating: 5 },
    ],
  },
  5: {
    name: 'Erling Haaland',
    title: 'General Contractor',
    company: 'Haaland Construction',
    location: 'Dublin, Ireland',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop',
    rating: 4.8,
    reviews: 203,
    projects: 180,
    experience: '20 years',
    specialties: ['Full Renovations', 'Extensions', 'Heritage Restoration'],
    description: 'Erling\'s team is known for finishing on time and on budget — a rarity in construction. His transparent pricing and weekly progress reports keep clients informed and confident throughout the build process.',
    phone: '+353 87 123 4567',
    email: 'erling@haalandconstruction.ie',
    verified: true,
    education: [
      { degree: 'BEng Civil Engineering', school: 'Trinity College Dublin', year: '2003' },
      { degree: 'Chartered Builder', school: 'CIOB', year: '2008' },
    ],
    awards: [
      { name: 'Builder of the Year', org: 'Irish Construction Awards', year: '2022' },
      { name: 'Excellence in Heritage', org: 'An Taisce', year: '2021' },
    ],
    services: [
      { name: 'Full House Renovation', price: 'From €180,000', desc: 'Complete home transformation with fixed-price guarantee' },
      { name: 'House Extensions', price: 'From €80,000', desc: 'Single or multi-storey extensions with planning support' },
      { name: 'Kitchen & Bathroom', price: 'From €35,000', desc: 'Specialist room renovations with premium finishes' },
      { name: 'Project Management', price: '8% of build cost', desc: 'Independent oversight of your construction project' },
    ],
    portfolio: [
      {
        title: 'Georgian Townhouse Restoration',
        location: 'Dublin 2, Ireland',
        type: 'Heritage Renovation',
        year: '2023',
        value: '€650K',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
        description: 'Complete restoration of a Grade II listed townhouse, including lime plaster restoration and sash window replication.',
        client: 'Diplomatic Family',
      },
      {
        title: 'Blackrock Family Extension',
        location: 'Blackrock, Dublin',
        type: 'House Extension',
        year: '2022',
        value: '€280K',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        description: 'Two-storey rear extension with open-plan kitchen, utility, and master bedroom suite above.',
        client: 'Family of Four',
      },
      {
        title: 'Howth Seaside Villa',
        location: 'Howth, Dublin',
        type: 'New Build',
        year: '2021',
        value: '€1.2M',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        description: 'Coastal contemporary home with zinc cladding, floor-to-ceiling glazing, and sea-facing terraces.',
        client: 'Private Client',
      },
      {
        title: 'Ranelagh Apartment Conversion',
        location: 'Ranelagh, Dublin',
        type: 'Apartment Renovation',
        year: '2023',
        value: '€145K',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Conversion of two apartments into one luxury penthouse with rooftop garden access.',
        client: 'Private Client',
      },
    ],
    testimonials: [
      { name: 'Patrick & Fiona Murphy', role: 'Homeowners', text: 'Erling finished 3 days early and €4,000 under budget. I did not think that was possible in construction.', rating: 5 },
      { name: 'Sarah O\'Brien', role: 'Architect', text: 'His team executes drawings with incredible precision. The finishes are consistently excellent.', rating: 5 },
      { name: 'John Kelly', role: 'Property Investor', text: 'I have used Haaland Construction for 6 projects. They are the only builder I trust implicitly.', rating: 5 },
    ],
  },
  6: {
    name: 'Dr. Priya Sharma',
    title: 'Structural Engineer',
    company: 'Sharma Structural Consultants',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=700&fit=crop',
    rating: 4.9,
    reviews: 112,
    projects: 290,
    experience: '14 years',
    specialties: ['Seismic Design', 'Structural Retrofitting', 'High-Rise Buildings'],
    description: 'Dr. Sharma ensures that beautiful designs are also structurally sound. Her expertise in seismic-resistant design is particularly valued in earthquake-prone regions, where safety cannot be compromised.',
    phone: '+91 98-7654-3210',
    email: 'priya@sharmastructural.in',
    verified: true,
    education: [
      { degree: 'PhD Structural Engineering', school: 'IIT Bombay', year: '2009' },
      { degree: 'BEng Civil Engineering', school: 'IIT Delhi', year: '2005' },
    ],
    awards: [
      { name: 'Outstanding Engineer Award', org: 'Institution of Engineers India', year: '2022' },
      { name: 'Best Thesis — Seismic Design', org: 'IIT Bombay', year: '2009' },
    ],
    services: [
      { name: 'Structural Assessment', price: 'From ₹75,000', desc: 'Detailed structural evaluation and load-bearing analysis' },
      { name: 'Seismic Retrofitting Design', price: 'From ₹150,000', desc: 'Earthquake-resistant upgrade plans for existing buildings' },
      { name: 'New Build Structural Design', price: '3-5% of construction cost', desc: 'Complete structural drawings and calculations' },
      { name: 'Peer Review', price: 'From ₹100,000', desc: 'Independent structural review of existing designs' },
    ],
    portfolio: [
      {
        title: 'Bandra-Worli Tower',
        location: 'Mumbai, India',
        type: 'High-Rise Residential',
        year: '2023',
        value: '₹45Cr project',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        description: 'Structural design for a 45-storey residential tower with outrigger belt truss system for wind and seismic resistance.',
        client: 'Lodha Group',
      },
      {
        title: 'Heritage Church Retrofit',
        location: 'Pune, India',
        type: 'Seismic Retrofitting',
        year: '2022',
        value: '₹3.2Cr',
        image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
        description: 'Base isolation and steel jacketing for a 120-year-old basilica without disturbing original stonework.',
        client: 'Archdiocese of Pune',
      },
      {
        title: 'Goa Beachfront Villa',
        location: 'Goa, India',
        type: 'Coastal Residence',
        year: '2021',
        value: '₹8Cr',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        description: 'Coastal engineering for a cantilevered villa over rocky terrain, designed to withstand 200 km/h winds.',
        client: 'Private Client',
      },
      {
        title: 'Delhi Metro Station Extension',
        location: 'New Delhi, India',
        type: 'Infrastructure',
        year: '2023',
        value: '₹18Cr',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
        description: 'Underground station box design with diaphragm walls and top-down construction methodology.',
        client: 'DMRC',
      },
    ],
    testimonials: [
      { name: 'Rajesh Kapoor', role: 'Architect', text: 'Dr. Sharma finds elegant structural solutions where others see impossible constraints. Brilliant engineer.', rating: 5 },
      { name: 'Anita Desai', role: 'Homeowner', text: 'She saved our 50-year-old family home with a retrofit plan that was both affordable and non-intrusive.', rating: 5 },
      { name: 'Vikram Mehta', role: 'Developer', text: 'Her seismic designs have withstood two earthquakes without a single crack. That speaks for itself.', rating: 5 },
    ],
  },
  7: {
    name: 'James Wilson',
    title: 'M&E Engineer',
    company: 'Wilson Building Services',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&h=700&fit=crop',
    rating: 4.6,
    reviews: 68,
    projects: 150,
    experience: '11 years',
    specialties: ['HVAC Design', 'Electrical Systems', 'Smart Building Integration'],
    description: 'James designs the invisible systems that make buildings comfortable and efficient. His forward-thinking approach integrates renewable energy and smart home technology from the earliest design stages.',
    phone: '+44 7700 900123',
    email: 'james@wilsonbuildingservices.co.uk',
    verified: true,
    education: [
      { degree: 'MEng Building Services', school: 'Imperial College London', year: '2012' },
      { degree: 'Chartered Engineer', school: 'CIBSE', year: '2015' },
    ],
    awards: [
      { name: 'Building Services Consultant of the Year', org: 'CIBSE Awards', year: '2021' },
    ],
    services: [
      { name: 'MEP Design Package', price: 'From £12,000', desc: 'Complete mechanical, electrical, and plumbing design' },
      { name: 'Smart Home Integration', price: 'From £8,000', desc: 'Automated lighting, climate, security, and AV systems' },
      { name: 'Energy Modeling', price: 'From £5,000', desc: 'Computational fluid dynamics and thermal performance analysis' },
      { name: 'RIBA Stage F-L Services', price: 'Custom quote', desc: 'Technical design through handover and commissioning' },
    ],
    portfolio: [
      {
        title: 'Notting Hill Smart Home',
        location: 'London, UK',
        type: 'Residential M&E',
        year: '2023',
        value: '£180K M&E package',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Net-zero M&E design with air-source heat pump, MVHR, and fully integrated Loxone smart home system.',
        client: 'Private Client',
      },
      {
        title: 'Shoreditch Office Fit-Out',
        location: 'London, UK',
        type: 'Commercial M&E',
        year: '2022',
        value: '£420K',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        description: 'Underfloor air distribution and LED lighting design for a 15,000 sq ft creative agency headquarters.',
        client: 'Media Agency',
      },
      {
        title: 'Cotswolds Passive House',
        location: 'Gloucestershire, UK',
        type: 'Sustainable Residence',
        year: '2021',
        value: '£95K M&E package',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        description: 'Certified Passive House M&E with mechanical ventilation heat recovery and solar thermal integration.',
        client: 'Private Client',
      },
      {
        title: 'Battersea Penthouse AV Integration',
        location: 'London, UK',
        type: 'Smart Home',
        year: '2023',
        value: '£65K',
        image: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=800&h=600&fit=crop',
        description: 'Invisible audio, automated shading, and climate control across a 4,000 sq ft riverside penthouse.',
        client: 'Private Client',
      },
    ],
    testimonials: [
      { name: 'Thomas Wright', role: 'Architect', text: 'James thinks about M&E as architecture, not just engineering. His ductwork routes are almost beautiful.', rating: 5 },
      { name: 'Emma Clarke', role: 'Homeowner', text: 'Our energy bills dropped 60% after James redesigned our systems. The smart home integration is flawless.', rating: 5 },
      { name: 'Richard Brown', role: 'Property Developer', text: 'He delivers M&E designs that contractors can actually build. No surprises, no change orders.', rating: 4 },
    ],
  },
  8: {
    name: 'Lisa Thompson',
    title: 'Quantity Surveyor',
    company: 'Thompson Cost Management',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1600&h=700&fit=crop',
    rating: 4.7,
    reviews: 89,
    projects: 200,
    experience: '13 years',
    specialties: ['Cost Planning', 'Tender Management', 'Value Engineering'],
    description: 'Lisa helps clients understand exactly what their project will cost before a single brick is laid. Her detailed cost plans eliminate surprises and ensure budgets are realistic from day one.',
    phone: '+61 412 345 678',
    email: 'lisa@thompsoncost.com.au',
    verified: true,
    education: [
      { degree: 'BSc Quantity Surveying', school: 'University of New South Wales', year: '2010' },
      { degree: 'MRICS', school: 'Royal Institution of Chartered Surveyors', year: '2013' },
    ],
    awards: [
      { name: 'Young QS of the Year', org: 'AIQS', year: '2016' },
    ],
    services: [
      { name: 'Preliminary Cost Plan', price: 'From AUD 3,500', desc: 'Order-of-magnitude estimate based on concept designs' },
      { name: 'Detailed Cost Plan', price: 'From AUD 8,000', desc: 'Elemental cost breakdown with market-rate pricing' },
      { name: 'Tender Documentation', price: 'From AUD 5,000', desc: 'Bill of quantities and tender evaluation' },
      { name: 'Contract Administration', price: '1.5% of contract value', desc: 'Monthly valuations, variations, and final account' },
    ],
    portfolio: [
      {
        title: 'Bondi Beachfront Residence',
        location: 'Bondi, Sydney',
        type: 'Cost Management',
        year: '2023',
        value: 'AUD 4.2M construction',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        description: 'Full cost management from feasibility to final account. Delivered 3% under budget despite pandemic material shortages.',
        client: 'Private Client',
      },
      {
        title: 'North Sydney Commercial Tower',
        location: 'North Sydney',
        type: 'Cost Planning',
        year: '2022',
        value: 'AUD 28M construction',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        description: 'Elemental cost plan for a 12-storey office tower with basement parking and retail podium.',
        client: 'Commercial Developer',
      },
      {
        title: 'Mosman Heritage Renovation',
        location: 'Mosman, Sydney',
        type: 'Cost Planning + Admin',
        year: '2021',
        value: 'AUD 1.8M construction',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
        description: 'Complex heritage renovation with unknown site conditions. Lisa\'s contingency planning proved invaluable.',
        client: 'Private Client',
      },
      {
        title: 'Byron Bay Eco-Retreat',
        location: 'Byron Bay, NSW',
        type: 'Value Engineering',
        year: '2023',
        value: 'AUD 6.5M construction',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
        description: 'Value engineering exercise saved AUD 800K without compromising design intent through smart material substitutions.',
        client: 'Hospitality Group',
      },
    ],
    testimonials: [
      { name: 'Michael Davis', role: 'Architect', text: 'Lisa\'s cost plans are the most detailed I have seen. She catches things we miss and keeps projects financially viable.', rating: 5 },
      { name: 'Jennifer Walsh', role: 'Homeowner', text: 'She told us exactly what our renovation would cost — and she was right within 2%. No surprises, no stress.', rating: 5 },
      { name: 'David Chen', role: 'Developer', text: 'Her tender evaluations are forensic. She saved us from selecting a contractor with hidden costs.', rating: 5 },
    ],
  },
  9: {
    name: 'David Park',
    title: 'Project Manager',
    company: 'Park Project Management',
    location: 'Seoul, South Korea',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=700&fit=crop',
    rating: 4.8,
    reviews: 134,
    projects: 95,
    experience: '16 years',
    specialties: ['Residential Projects', 'Design-Build', 'Timeline Optimization'],
    description: 'David is the conductor who keeps every project running smoothly. He coordinates architects, contractors, and suppliers so clients can focus on the exciting decisions while he handles the logistics.',
    phone: '+82 10-1234-5678',
    email: 'david@parkpm.kr',
    verified: true,
    education: [
      { degree: 'MBA Construction Management', school: 'Yonsei University', year: '2009' },
      { degree: 'BEng Civil Engineering', school: 'KAIST', year: '2005' },
    ],
    awards: [
      { name: 'Project Manager of the Year', org: 'Korea Project Management Association', year: '2021' },
    ],
    services: [
      { name: 'Project Feasibility Study', price: 'From KRW 5M', desc: 'Timeline, budget, and risk assessment for your project' },
      { name: 'Full Project Management', price: '5-8% of project value', desc: 'End-to-end oversight from design to handover' },
      { name: 'Design-Build Coordination', price: 'From KRW 15M', desc: 'Single-point accountability for design and construction' },
      { name: 'Dispute Resolution', price: 'Hourly rate KRW 250,000', desc: 'Mediation between contractors and clients' },
    ],
    portfolio: [
      {
        title: 'Hannam-dong Luxury Villa',
        location: 'Hannam-dong, Seoul',
        type: 'Residential PM',
        year: '2023',
        value: 'KRW 8.5B',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Managed design and construction of a 5-storey villa with basement pool, home theater, and rooftop garden.',
        client: 'Entertainment Executive',
      },
      {
        title: 'Gangnam Boutique Hotel',
        location: 'Gangnam, Seoul',
        type: 'Hospitality PM',
        year: '2022',
        value: 'KRW 22B',
        image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
        description: 'Fast-track renovation of a 45-room boutique hotel completed in 8 months with zero disruption to adjacent properties.',
        client: 'Hospitality Investor',
      },
      {
        title: 'Busan Coastal Apartment',
        location: 'Busan, South Korea',
        type: 'Residential PM',
        year: '2021',
        value: 'KRW 2.1B',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        description: 'Full apartment renovation with ocean views, completed 2 weeks ahead of schedule.',
        client: 'Private Client',
      },
      {
        title: 'Seongsu-dong Creative Office',
        location: 'Seongsu-dong, Seoul',
        type: 'Commercial PM',
        year: '2023',
        value: 'KRW 4.5B',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        description: 'Adaptive reuse of a factory building into creative offices with exposed structure and modern M&E.',
        client: 'Tech Startup',
      },
    ],
    testimonials: [
      { name: 'Min-jae Kim', role: 'Homeowner', text: 'David handled everything. I just showed up for the final walkthrough and it was perfect. Worth every won.', rating: 5 },
      { name: 'Sophie Lee', role: 'Interior Designer', text: 'He protects the design intent while keeping contractors honest. A rare combination in project managers.', rating: 5 },
      { name: 'Robert Park', role: 'Developer', text: 'Our hotel opened on the exact date David promised, 18 months earlier. His scheduling is almost supernatural.', rating: 5 },
    ],
  },
  10: {
    name: 'Rachel Green',
    title: 'Smart Home Specialist',
    company: 'Green Home Automation',
    location: 'Austin, Texas, USA',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&h=700&fit=crop',
    rating: 4.9,
    reviews: 178,
    projects: 320,
    experience: '9 years',
    specialties: ['Home Automation', 'Security Systems', 'Energy Management'],
    description: 'Rachel transforms houses into intelligent homes. From automated lighting scenes to integrated security and climate control, she designs systems that are powerful yet intuitive to use.',
    phone: '+1 (512) 234-5678',
    email: 'rachel@greenhomeauto.com',
    verified: true,
    education: [
      { degree: 'BSc Electrical Engineering', school: 'UT Austin', year: '2014' },
      { degree: 'Certified Control4 Programmer', school: 'Control4', year: '2016' },
    ],
    awards: [
      { name: 'Best Smart Home Installation', org: 'CE Pro', year: '2022' },
      { name: 'Top 100 Integrators', org: 'Integration Business', year: '2023' },
    ],
    services: [
      { name: 'Smart Home Consultation', price: 'Complimentary', desc: 'Assessment of your needs and system recommendations' },
      { name: 'Full Home Automation', price: 'From $25,000', desc: 'Integrated lighting, climate, shades, AV, and security' },
      { name: 'Security System Design', price: 'From $8,000', desc: 'Cameras, access control, and monitoring integration' },
      { name: 'System Programming & Training', price: 'From $3,000', desc: 'Custom scenes, schedules, and family onboarding' },
    ],
    portfolio: [
      {
        title: 'Westlake Hills Smart Estate',
        location: 'Austin, Texas',
        type: 'Full Home Automation',
        year: '2023',
        value: '$180K system',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        description: 'Complete Control4 ecosystem with 80+ zones of lighting, motorized shading, whole-home audio, and biometric access.',
        client: 'Tech CEO',
      },
      {
        title: 'Downtown Austin Loft',
        location: 'Austin, Texas',
        type: 'Compact Smart Home',
        year: '2022',
        value: '$35K system',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Space-efficient automation for a 1,200 sq ft loft with hidden speakers, automated Murphy bed, and voice control.',
        client: 'Musician',
      },
      {
        title: 'Lakeway Lake House',
        location: 'Lakeway, Texas',
        type: 'Security + Automation',
        year: '2021',
        value: '$85K system',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        description: 'Lakefront property with perimeter security, boat dock monitoring, and automated outdoor lighting scenes.',
        client: 'Private Client',
      },
      {
        title: 'Tarrytown Renovation',
        location: 'Austin, Texas',
        type: 'Retrofit Automation',
        year: '2023',
        value: '$55K system',
        image: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=800&h=600&fit=crop',
        description: 'Wireless Lutron system installed in a 1940s home without disturbing original plaster walls.',
        client: 'History Professor',
      },
    ],
    testimonials: [
      { name: 'Mark & Linda Johnson', role: 'Homeowners', text: 'Rachel made our home feel like something from the future, but it is still incredibly easy to use. Our kids figured it out in minutes.', rating: 5 },
      { name: 'Steve Chen', role: 'Architect', text: 'She thinks about technology as part of the architecture, not an afterthought. Her wiring plans are beautifully organized.', rating: 5 },
      { name: 'Amy Rodriguez', role: 'Homeowner', text: 'The automated lighting scenes she programmed make our home feel magical every evening. Best investment we made.', rating: 5 },
    ],
  },
  11: {
    name: 'Marco Rossi',
    title: 'Pool & Outdoor Living Designer',
    company: 'Rossi Outdoor Living',
    location: 'Marbella, Spain',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1600&h=700&fit=crop',
    rating: 4.7,
    reviews: 92,
    projects: 140,
    experience: '17 years',
    specialties: ['Infinity Pools', 'Outdoor Kitchens', 'Terrace Design'],
    description: 'Marco designs outdoor spaces that rival the finest interiors. His infinity pools and outdoor kitchens have become the centerpiece of luxury villas across the Mediterranean.',
    phone: '+34 623 456 789',
    email: 'marco@rossioutdoor.es',
    verified: true,
    education: [
      { degree: 'BSc Landscape Architecture', school: 'Politecnico di Milano', year: '2006' },
      { degree: 'Pool Design Certification', school: 'PHTA', year: '2008' },
    ],
    awards: [
      { name: 'Best Pool Design', org: 'European Pool & Spa Awards', year: '2022' },
      { name: 'Excellence in Outdoor Living', org: 'Architectural Digest Spain', year: '2021' },
    ],
    services: [
      { name: 'Pool Concept & Design', price: 'From €4,500', desc: '3D visualization, engineering, and material specification' },
      { name: 'Pool Construction', price: 'From €65,000', desc: 'Turnkey pool construction with 10-year structural guarantee' },
      { name: 'Outdoor Kitchen Design', price: 'From €15,000', desc: 'Custom outdoor cooking and entertainment spaces' },
      { name: 'Full Outdoor Living Package', price: 'From €120,000', desc: 'Pool, kitchen, landscaping, lighting, and furniture' },
    ],
    portfolio: [
      {
        title: 'La Zagaleta Infinity Pool',
        location: 'Marbella, Spain',
        type: 'Infinity Pool',
        year: '2023',
        value: '€280K',
        image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&h=600&fit=crop',
        description: '25m vanishing-edge pool with glass wall, submerged seating, and integrated fire features overlooking the Mediterranean.',
        client: 'Private Client',
      },
      {
        title: 'Nueva Andalucia Outdoor Kitchen',
        location: 'Marbella, Spain',
        type: 'Outdoor Kitchen',
        year: '2022',
        value: '€85K',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        description: 'Complete outdoor kitchen with pizza oven, teppanyaki grill, wine cellar, and covered dining pavilion.',
        client: 'Restaurant Owner',
      },
      {
        title: 'Sotogrande Lagoon Pool',
        location: 'Sotogrande, Spain',
        type: 'Natural Pool',
        year: '2021',
        value: '€195K',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
        description: 'Chemical-free swimming pond with biological filtration, natural stone edges, and beach entry.',
        client: 'Environmental Consultant',
      },
      {
        title: 'Ibiza Cliffside Terrace',
        location: 'Ibiza, Spain',
        type: 'Terrace & Pool',
        year: '2023',
        value: '€340K',
        image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop',
        description: 'Cantilevered infinity pool and terrace built into a cliffside with glass-bottom sections and sunset views.',
        client: 'Music Producer',
      },
    ],
    testimonials: [
      { name: 'Carlos & Maria Gonzalez', role: 'Homeowners', text: 'Marco built us a pool that looks like it belongs in a resort. The infinity edge creates the most incredible optical illusion.', rating: 5 },
      { name: 'Antonio Bianchi', role: 'Architect', text: 'His pool engineering is flawless. We have done 8 projects together and never had a single leak or crack.', rating: 5 },
      { name: 'Laura Schmidt', role: 'Homeowner', text: 'The outdoor kitchen Marco designed is where we spend every evening now. It has completely changed how we live.', rating: 5 },
    ],
  },
  12: {
    name: 'Yuki Nakamura',
    title: 'Renovation Specialist',
    company: 'Nakamura Renovations',
    location: 'Osaka, Japan',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=700&fit=crop',
    rating: 4.8,
    reviews: 156,
    projects: 260,
    experience: '14 years',
    specialties: ['Kitchen Renovation', 'Bathroom Remodeling', 'Space Optimization'],
    description: 'Yuki specializes in transforming outdated spaces into modern, functional homes. His team is known for meticulous dust control and completing kitchen renovations in as little as two weeks.',
    phone: '+81 80-8765-4321',
    email: 'yuki@nakamurareno.jp',
    verified: true,
    education: [
      { degree: 'BSc Construction Management', school: 'Osaka University', year: '2009' },
      { degree: 'Certified Kitchen Designer', school: 'NKBA', year: '2012' },
    ],
    awards: [
      { name: 'Renovation of the Year', org: 'Japan Renovation Association', year: '2022' },
      { name: 'Best Bathroom Design', org: 'JLA Awards', year: '2021' },
    ],
    services: [
      { name: 'Kitchen Renovation', price: 'From ¥2.5M', desc: 'Complete kitchen remodel in 2-3 weeks with temporary kitchen provided' },
      { name: 'Bathroom Remodeling', price: 'From ¥1.8M', desc: 'Full bathroom renovation with waterproofing guarantee' },
      { name: 'Whole Apartment Renovation', price: 'From ¥8M', desc: 'Complete apartment transformation with design coordination' },
      { name: 'Space Optimization', price: 'From ¥500,000', desc: 'Layout redesign and storage solutions without structural changes' },
    ],
    portfolio: [
      {
        title: 'Minami-senri Kitchen',
        location: 'Osaka, Japan',
        type: 'Kitchen Renovation',
        year: '2023',
        value: '¥4.2M',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop',
        description: 'Compact kitchen transformed with pull-out pantries, induction cooktop, and hidden dishwasher. Completed in 12 days.',
        client: 'Working Couple',
      },
      {
        title: 'Kita-horie Bath Suite',
        location: 'Osaka, Japan',
        type: 'Bathroom Remodel',
        year: '2022',
        value: '¥3.5M',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
        description: 'Luxury bathroom with ofuro soaking tub, rainfall shower, and heated floors in a 70-year-old machiya.',
        client: 'Retired Couple',
      },
      {
        title: 'Namba Apartment Full Reno',
        location: 'Namba, Osaka',
        type: 'Full Renovation',
        year: '2021',
        value: '¥12M',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        description: 'Complete gut renovation of a 35-year-old apartment, including seismic retrofit and modern M&E.',
        client: 'Young Family',
      },
      {
        title: 'Umeda Office Conversion',
        location: 'Umeda, Osaka',
        type: 'Commercial Renovation',
        year: '2023',
        value: '¥8.5M',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        description: 'Converted a retail space into a co-working office with soundproof phone booths and modular furniture.',
        client: 'Startup Founder',
      },
    ],
    testimonials: [
      { name: 'Kenji & Aiko Tanaka', role: 'Homeowners', text: 'Yuki completed our kitchen in 10 days. We cooked dinner in it on day 11. Unbelievable speed and quality.', rating: 5 },
      { name: 'Hiroshi Yamamoto', role: 'Architect', text: 'His dust control is the best I have seen. Adjacent rooms stayed completely clean during a full apartment renovation.', rating: 5 },
      { name: 'Mei Lin', role: 'Homeowner', text: 'He found storage space we did not know we had. Our apartment feels twice as big now.', rating: 5 },
    ],
  },
};

export default function ProfessionalProfile() {
  const { id } = useParams();
  const pro = portfolioData[id];
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!pro) {
    return (
      <div className="pt-28 px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto text-center py-24">
          <p className="text-stone text-sm">Expert not found.</p>
          <Link to="/professionals" className="text-ink text-sm mt-4 inline-block underline underline-offset-4">
            Back to Experts
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setActiveImage((i) => (i + 1) % pro.portfolio.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + pro.portfolio.length) % pro.portfolio.length);

  return (
    <div className="pt-28">
      {/* Hero / Cover */}
      <section className="relative">
        <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <img src={pro.coverImage} alt={pro.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 md:pb-12">
          <div className="max-w-[1400px] mx-auto flex items-end gap-6">
            <div className="w-20 h-20 md:w-28 md:h-28 border-4 border-paper overflow-hidden flex-shrink-0 hidden md:block">
              <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                {pro.verified && (
                  <span className="text-[9px] tracking-[0.1em] uppercase text-paper bg-ink/70 px-2 py-1 flex items-center gap-1">
                    <Check className="w-3 h-3" strokeWidth={1.5} /> Verified Expert
                  </span>
                )}
                <span className="text-[9px] tracking-[0.1em] uppercase text-paper/70 bg-ink/50 px-2 py-1">
                  {pro.specialties[0]}
                </span>
              </div>
              <h1 className="font-serif text-paper text-2xl md:text-4xl">{pro.name}</h1>
              <p className="text-paper/70 text-sm mt-1">{pro.title} — {pro.company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-line bg-paper">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-stone fill-stone" />
              <span className="font-serif text-ink">{pro.rating}</span>
              <span className="text-stone text-xs">({pro.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-stone" strokeWidth={1.5} />
              <span className="font-serif text-ink">{pro.projects}</span>
              <span className="text-stone text-xs">projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-stone" strokeWidth={1.5} />
              <span className="font-serif text-ink">{pro.experience}</span>
              <span className="text-stone text-xs">experience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stone" strokeWidth={1.5} />
              <span className="text-stone text-xs">{pro.location}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column - Bio & Details */}
          <div className="lg:col-span-2 space-y-16">
            {/* About */}
            <section>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-4">/01 About</span>
              <p className="text-stone text-sm leading-[1.9]">{pro.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {pro.specialties.map((s) => (
                  <span key={s} className="px-3 py-1.5 border border-line text-[11px] text-stone">{s}</span>
                ))}
              </div>
            </section>

            {/* Portfolio Gallery */}
            <section>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-6">/02 Portfolio</span>

              {/* Main image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-line mb-4 group cursor-pointer" onClick={() => setLightboxImage(pro.portfolio[activeImage].image)}>
                <img
                  src={pro.portfolio[activeImage].image}
                  alt={pro.portfolio[activeImage].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-paper/60">{pro.portfolio[activeImage].type}</span>
                  <h3 className="font-serif text-paper text-xl mt-1">{pro.portfolio[activeImage].title}</h3>
                  <p className="text-paper/70 text-sm mt-1">{pro.portfolio[activeImage].location} · {pro.portfolio[activeImage].year}</p>
                </div>
                {pro.portfolio.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ink/50 hover:bg-ink/80 text-paper flex items-center justify-center transition-all backdrop-blur-sm">
                      <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ink/50 hover:bg-ink/80 text-paper flex items-center justify-center transition-all backdrop-blur-sm">
                      <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {pro.portfolio.map((proj, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-16 flex-shrink-0 overflow-hidden border-2 transition-all ${i === activeImage ? 'border-ink' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Project details */}
              <div className="mt-6 p-6 border border-line">
                <div className="grid sm:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Project Value</span>
                    <span className="font-serif text-ink text-sm">{pro.portfolio[activeImage].value}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Year</span>
                    <span className="font-serif text-ink text-sm">{pro.portfolio[activeImage].year}</span>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Client</span>
                    <span className="font-serif text-ink text-sm">{pro.portfolio[activeImage].client}</span>
                  </div>
                </div>
                <p className="text-stone text-sm leading-[1.8]">{pro.portfolio[activeImage].description}</p>
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-6">/03 Client Testimonials</span>
              <div className="grid sm:grid-cols-2 gap-px bg-line">
                {pro.testimonials.map((t, i) => (
                  <div key={i} className="bg-paper p-6 md:p-8">
                    <Quote className="w-6 h-6 text-line mb-4" strokeWidth={1} />
                    <p className="text-stone text-sm leading-[1.8] mb-6">"{t.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-ink text-sm">{t.name}</p>
                        <p className="text-stone text-xs">{t.role}</p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-stone fill-stone" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Awards */}
            <section>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-6">/04 Credentials</span>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-ink text-sm mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-stone" strokeWidth={1.5} /> Education
                  </h4>
                  <div className="space-y-4">
                    {pro.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-line pl-4">
                        <p className="text-ink text-sm">{edu.degree}</p>
                        <p className="text-stone text-xs">{edu.school} · {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-ink text-sm mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-stone" strokeWidth={1.5} /> Awards
                  </h4>
                  <div className="space-y-4">
                    {pro.awards.map((award, i) => (
                      <div key={i} className="border-l-2 border-line pl-4">
                        <p className="text-ink text-sm">{award.name}</p>
                        <p className="text-stone text-xs">{award.org}{award.year ? ` · ${award.year}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Services & Contact */}
          <div className="space-y-8">
            {/* Contact card */}
            <div className="border border-line p-6">
              <h3 className="font-serif text-ink text-base mb-4">Contact {pro.name.split(' ')[0]}</h3>
              <div className="space-y-3">
                <a href={`tel:${pro.phone}`} className="flex items-center gap-3 text-sm text-stone hover:text-ink transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={1.5} /> {pro.phone}
                </a>
                <a href={`mailto:${pro.email}`} className="flex items-center gap-3 text-sm text-stone hover:text-ink transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={1.5} /> {pro.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-stone">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} /> {pro.location}
                </div>
              </div>
              <a
                href={`mailto:${pro.email}?subject=Project Inquiry via xuantelier`}
                className="mt-6 w-full py-3 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-2"
              >
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} /> Send Inquiry
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-ink text-base mb-4">Services & Pricing</h3>
              <div className="space-y-4">
                {pro.services.map((service, i) => (
                  <div key={i} className="border border-line p-4 group hover:border-stone transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-ink text-sm">{service.name}</h4>
                      <span className="font-serif text-ink text-sm flex-shrink-0 ml-2">{service.price}</span>
                    </div>
                    <p className="text-stone text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="bg-ink p-6 text-center">
              <Check className="w-6 h-6 text-paper mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-serif text-paper text-sm">Verified by xuantelier</p>
              <p className="text-paper/60 text-xs mt-1">Identity, qualifications, and insurance checked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <section className="border-t border-line py-8 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/professionals" className="inline-flex items-center gap-2 text-sm text-stone hover:text-ink transition-colors">
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} /> Back to all experts
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-paper/60 hover:text-paper transition-colors">
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <img src={lightboxImage} alt="" className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
