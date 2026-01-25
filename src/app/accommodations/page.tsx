'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Hotel, Home, Building2, Wifi, Coffee, Utensils, Car, Star, MapPin, DollarSign, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import ContactInquiryForm from '../../components/ContactInquiryForm';

interface Accommodation {
  id: number;
  name: string;
  type: 'luxury' | 'mid-range' | 'budget' | 'apartment' | 'guesthouse' | 'boutique';
  description: string;
  image: string;
  images: string[];
  rating: number;
  priceRange: string;
  location: string;
  amenities: string[];
  icon: any;
  detailedDescription: string;
  highlights: string[];
  address?: string;
  checkInOut?: string;
}

const WhereToStay: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('all');
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactAccommodation, setContactAccommodation] = useState<string>('');

  const types = [
    { id: 'all', name: 'All Accommodations', icon: Building2 },
    { id: 'luxury', name: 'Luxury Hotels', icon: Hotel },
    { id: 'mid-range', name: 'Mid-Range', icon: Building2 },
    { id: 'budget', name: 'Budget Friendly', icon: Home },
    { id: 'apartment', name: 'Apartments', icon: Home },
    { id: 'guesthouse', name: 'Guesthouses', icon: Home },
    { id: 'boutique', name: 'Boutique Hotels', icon: Building2 },
  ];

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: 'Mövenpick Hotel Kigali',
      type: 'luxury',
      description: 'A luxury hotel offering elegant rooms, fine dining, modern amenities, and exceptional service in Kigali city center.',
      image: '/images/moven.jpg',
      images: ['/images/movenipick.png', '/images/mov1.jpg', '/images/mov2.jpg'],
      rating: 4.8,
      priceRange: '$$$$ - $600-1000/night',
      location: 'City Center',
      amenities: [
        "Free Wi-Fi",
        "Swimming Pool",
        "Fitness Center",
        "Spa & Wellness",
        "Restaurant & Bar",
        "Conference Facilities",
        "Airport Shuttle",
        "24/7 Room Service"
      ],
      icon: Hotel,
      detailedDescription: 'Mövenpick Hotel Kigali represents the pinnacle of luxury hospitality in Rwanda\'s capital city. This five-star hotel combines Swiss precision and excellence with warm Rwandan hospitality, creating an unforgettable stay experience. Located in the heart of Kigali\'s city center, the hotel offers easy access to business districts, government offices, and major attractions. Each elegantly appointed room features contemporary design with local artistic touches, premium bedding, marble bathrooms, and state-of-the-art technology including smart TVs and high-speed internet. The hotel\'s culinary offerings are exceptional, with multiple restaurants serving international cuisine, authentic Rwandan dishes, and specialty dining experiences. The executive lounge provides a private sanctuary for business travelers with complimentary refreshments and meeting spaces. The wellness center features a modern gym, serene spa offering traditional and contemporary treatments, and an outdoor pool perfect for relaxation. Business facilities include fully-equipped conference rooms with cutting-edge audiovisual technology, catering services, and professional event planning support.',
      highlights: [
        'Prime city center location',
        'Luxurious Swiss hospitality standards',
        'Multiple award-winning restaurants',
        'Full-service spa and wellness center',
        'Executive lounge with premium amenities',
        'State-of-the-art conference facilities',
        'Personalized concierge services',
        'Complimentary airport transfers'
      ],
      address: 'Avenue de la Paix, Kigali City Center',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 2,
      name: 'Radisson Blu Hotel & Convention Centre',
      type: 'luxury',
      description: 'Modern luxury hotel with stunning city views, conference facilities, and premium dining options.',
      image: '/images/radison.jpg',
      images: ['/images/radd.jpg', '/images/radison.jpg', '/images/radison3.jpg'],
      rating: 4.7,
      priceRange: '$$$$ - $180-350/night',
      location: 'Kigali Heights',
      amenities: ['Free WiFi', 'Multiple Restaurants', 'Pool', 'Gym', 'Conference Rooms', 'Spa'],
      icon: Hotel,
      detailedDescription: 'The Radisson Blu Hotel & Convention Centre stands as a modern architectural landmark in Kigali Heights, offering panoramic views of the city\'s rolling hills. This contemporary luxury hotel caters to both business and leisure travelers with its comprehensive facilities and impeccable service. The spacious rooms and suites feature floor-to-ceiling windows that flood spaces with natural light and provide spectacular city vistas. Modern amenities include premium bedding, work desks, complimentary WiFi, and elegant bathrooms with rainfall showers. The hotel boasts multiple dining venues, each offering unique culinary experiences from international buffets to fine dining and casual café options. The rooftop pool provides a stunning setting for relaxation with sweeping city views, while the fitness center features the latest equipment for maintaining your workout routine. As a premier convention center, the hotel offers East Africa\'s largest pillar-free ballroom along with numerous meeting rooms equipped with advanced technology. The professional events team ensures flawless execution of conferences, weddings, and special occasions.',
      highlights: [
        'Panoramic city views from elevated location',
        'East Africa\'s largest convention center',
        'Multiple international dining options',
        'Rooftop infinity pool with city views',
        'Modern fitness and wellness facilities',
        'Spacious rooms with contemporary design',
        'Professional business services',
        'Close to major business districts'
      ],
      address: 'KN 3 Avenue, Kigali Heights, Nyarugenge',
      checkInOut: 'Check-in: 3:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 3,
      name: 'The Retreat',
      type: 'luxury',
      description: 'Boutique luxury retreat offering privacy, tranquility, and personalized service in a beautiful setting.',
      image: '/images/retreat hote.jpg',
      images: ['/images/retreat hote.jpg', '/images/the-retreat.jpg', '/images/retreat.jpg'],
      rating: 4.9,
      priceRange: '$$$$ - $250-450/night',
      location: 'Kacyiru',
      amenities: ['Free WiFi', 'Fine Dining', 'Pool', 'Garden', 'Private Villas', 'Butler Service'],
      icon: Hotel,
      detailedDescription: 'The Retreat offers an exclusive sanctuary of peace and luxury in the tranquil Kacyiru neighborhood. This boutique hotel redefines personalized hospitality with its intimate setting, dedicated butler service, and attention to every detail. The property features beautifully designed private villas and suites, each offering complete privacy and comfort. Rooms are decorated with contemporary African art, feature luxurious furnishings, and open onto private terraces or gardens. The hotel\'s commitment to exceptional dining is evident in its restaurant, where talented chefs create innovative cuisine using locally-sourced ingredients. Guests can enjoy meals in various settings including the elegant dining room, poolside terrace, or in the privacy of their villa. The lush gardens provide a serene environment for relaxation, meditation, or leisurely walks. The infinity pool offers stunning views and a peaceful atmosphere. Personalized services include private yoga sessions, spa treatments, customized excursions, and special dining experiences. The hotel\'s intimate size ensures that each guest receives individual attention and customized service.',
      highlights: [
        'Exclusive private villas with gardens',
        'Dedicated personal butler service',
        'Gourmet dining with local ingredients',
        'Serene gardens and infinity pool',
        'Customized spa and wellness treatments',
        'Privacy and tranquility assured',
        'Personalized concierge services',
        'Perfect for romantic getaways'
      ],
      address: 'KG 7 Avenue, Kacyiru, Gasabo',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
    },
    {
      id: 4,
      name: 'The Pinnacle Kigali',
      type: 'luxury',
      description: 'A deluxe boutique hotel offering luxury rooms, fine dining, world-class amenities, and breathtaking Kigali city views.',
      image: '/images/pinache.png',
      images: ['/images/pinnache.png', '/images/pinache1.png', '/images/pinache.png'],
      rating: 4.5,
      priceRange: '$$$ - $120-200/night',
      location: 'City Center',
      amenities: ["Free WiFi", "Restaurant", "Pool", "Bar", "Room Service", "Parking"],
      icon: Building2,
      detailedDescription: 'The Pinnacle Kigali offers boutique luxury with spectacular views over the city. This modern hotel combines contemporary design with comfort and convenience, making it ideal for both business and leisure travelers. The stylishly appointed rooms feature large windows showcasing Kigali\'s impressive cityscape, comfortable bedding, modern workspaces, and well-appointed bathrooms. The hotel\'s restaurant serves a mix of international and local cuisine, with special attention to presentation and quality. The rooftop bar has become a popular destination for sunset cocktails, offering panoramic city views and a sophisticated atmosphere. The outdoor pool area provides a refreshing escape with lounge chairs and attentive service. Business travelers appreciate the well-equipped meeting rooms and reliable WiFi throughout the property. The central location puts guests within easy reach of shopping, dining, and major business districts. Professional staff members are knowledgeable about local attractions and happy to arrange tours, transportation, or restaurant reservations.',
      highlights: [
        'Spectacular panoramic city views',
        'Modern boutique hotel design',
        'Popular rooftop bar and restaurant',
        'Central location near major attractions',
        'Outdoor pool with city views',
        'Professional business facilities',
        'Attentive personalized service',
        'Great value for luxury amenities'
      ],
      address: 'KN 4 Avenue, City Center, Nyarugenge',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 12:00 PM'
    },
    
     {
  id: 5,
  name: 'Le Youkounkoun Hotel',
  type: 'mid-range',
  description: 'Elegant boutique hotel offering stylish rooms, warm hospitality, and a peaceful atmosphere.',
  image: '/images/leyoukounkoun.jpg',
  images: ['/images/leyoukounkoun.jpg', '/images/lekuku.jpg', '/images/lekuku1.jpg'],
  rating: 4.5,
  priceRange: '$$$ - $90-170/night',
  location: 'Kacyiru',
  amenities: ['Free WiFi', 'Restaurant', 'Swimming Pool', 'Garden', 'Bar', 'Parking'],
  icon: Building2,
  detailedDescription: 'Le Youkounkoun Hotel is a charming boutique hotel known for its elegant design, calm environment, and personalized service. The hotel features tastefully decorated rooms with comfortable bedding, modern bathrooms, and workspaces ideal for both leisure and business travelers. Guests enjoy high-speed WiFi, a serene garden, and a refreshing swimming pool. The on-site restaurant serves a mix of local and international cuisine, while the bar provides a relaxing spot for evening drinks. Located in Kacyiru, the hotel offers easy access to government offices, business centers, and the city center, making it a perfect balance between tranquility and convenience.',
  highlights: [
    'Boutique luxury experience',
    'Beautiful garden and pool',
    'Quiet and secure neighborhood',
    'High-quality restaurant',
    'Personalized guest service',
    'Stylish modern rooms',
    'Ideal for business and leisure stays',
    'Peaceful Kacyiru location'
  ],
  address: 'Kacyiru, Gasabo District, Kigali',
  checkInOut: 'Check-in: 2:00 PM | Check-out: 12:00 PM'
},
    {
      id: 6,
      name: 'Heaven Boutique Hotel',
      type: 'mid-range',
      description: 'Stylish boutique hotel with panoramic city views, rooftop restaurant, and vibrant atmosphere.',
      image: '/images/heaven.jpg',
      images: ['/images/heaven2.jpg', '/images/heaven.jpg', '/images/heaven1.jpg'],
      rating: 4.6,
      priceRange: '$$$ - $90-160/night',
      location: 'Kiyovu',
      amenities: ['Free WiFi', 'Rooftop Restaurant', 'Bar', 'City Views', 'Event Space'],
      icon: Building2,
      detailedDescription: 'Heaven Boutique Hotel has earned its reputation as one of Kigali\'s most vibrant and socially-oriented hotels. Perched on a hilltop, the property offers stunning 360-degree views of the city, making it particularly popular for its rooftop restaurant and bar. The hotel successfully balances comfort with social atmosphere, attracting a mix of travelers, expats, and locals. Rooms are clean and comfortable with modern amenities, though the real star is the spectacular rooftop venue. The restaurant serves excellent international and fusion cuisine with an emphasis on fresh ingredients and creative presentation. As evening falls, the rooftop transforms into one of Kigali\'s hottest nightlife destinations with live DJs, themed events, and a sophisticated crowd. The hotel also features event spaces suitable for private parties, corporate gatherings, and weddings. Despite the lively atmosphere on the rooftop, rooms are well-insulated to ensure peaceful sleep. The staff is young, energetic, and knowledgeable about Kigali\'s social scene.',
      highlights: [
        'Spectacular 360-degree city views',
        'Famous rooftop restaurant and bar',
        'Vibrant nightlife and events',
        'Central Kiyovu location',
        'Popular social atmosphere',
        'Good quality restaurant',
        'Event and party facilities',
        'Mix of travelers and locals'
      ],
      address: 'KG 7 Avenue, Kiyovu, Nyarugenge',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
    },
    {
  
  id: 7,
  name: 'Hut Resto & Boutique Hotel',
  type: 'boutique',
  description: 'Stylish boutique hotel with a relaxing garden, great food, and a cozy atmosphere for travelers and locals.',
  image: '/images/hut.jpg',
  images: ['/images/hut3.jpg', '/images/hut.jpg', '/images/hut1.jpg'],
  rating: 4.5,
  priceRange: '$$ - $60-120/night',
  location: 'Kimihurura',
  amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Garden', 'Room Service', 'Parking'],
  icon: Home,
  detailedDescription: 'Hut Resto & Boutique Hotel is a charming and modern boutique hotel located in the heart of Kimihurura, Kigali. It offers beautifully designed rooms that combine comfort and elegance, making it ideal for both business and leisure travelers. The hotel is well known for its high-quality restaurant, serving a mix of international and local cuisine in a peaceful garden setting. Guests can relax in the outdoor seating area, enjoy drinks at the bar, or unwind in the stylish lounge. The staff provide excellent hospitality, ensuring a warm and welcoming experience. With its central location, guests have easy access to shopping centers, cafes, and key business areas of the city.',
  highlights: [
    'Elegant boutique-style rooms',
    'Popular on-site restaurant',
    'Beautiful garden and outdoor seating',
    'Friendly and professional staff',
    'Central location in Kimihurura',
    'Peaceful and secure environment',
    'Ideal for business and leisure stays'
  ],
  address: 'KG 9 Avenue, Kimihurura, Gasabo',
  checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
},
    {
      id: 8,
      name: 'Mythos Boutique Hotel',
      type: 'boutique',
      description: 'A stylish boutique hotel in Kigali Kiyovu district offering elegant rooms, personalized service, and scenic views over the Kimihurura Valley.',
      image: '/images/my.jpg',
      images: ['/images/my.jpg', '/images/my.jpg', '/images/my.jpg'],
      rating: 4.0,
      priceRange: '$$ - $40-70/night',
      location: 'Kiyovu',
      amenities: [
        "Free WiFi",
        "Restaurant",
        "Outdoor Pool",
        "Bar/Lounge",
        "24‑Hour Room Service",
        "Parking",
        "Fitness Center",
        "Conference Facilities"
      ],
      icon: Building2,
      detailedDescription: 'Mythos Boutique Hotel brings Mediterranean-inspired elegance to Kigali\'s Kiyovu district. This charming property combines boutique aesthetics with warm hospitality, creating a unique accommodation experience. The hotel\'s design incorporates clean lines, natural materials, and artistic touches that create a sophisticated yet comfortable atmosphere. Rooms feature quality furnishings, good natural light, and views over the Kimihurura Valley. The restaurant serves a blend of Mediterranean and international cuisine with an emphasis on fresh, seasonal ingredients. The outdoor pool area provides a peaceful retreat with lounge chairs, umbrellas, and poolside service. The bar offers a selection of wines, cocktails, and light snacks in a relaxed setting. For business needs, the hotel provides conference facilities suitable for small meetings and events. The 24-hour room service ensures convenience for guests arriving on late flights or working odd hours. The location offers the tranquility of a residential area while maintaining easy access to the city center.',
      highlights: [
        'Mediterranean-inspired design',
        'Scenic valley views',
        'Quality restaurant and bar',
        'Pleasant outdoor pool',
        'Boutique personalized service',
        '24-hour room service',
        'Conference facilities available',
        'Peaceful Kiyovu location'
      ],
      address: 'KG 8 Avenue, Kiyovu, Nyarugenge',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 9,
      name: 'Maya Residences Rwanda',
      type: 'mid-range',
      description: 'A stylish urban hotel offering modern, apartment‑style rooms with city views, comfort, and easy access to Kigali key attractions.',
      image: '/images/maya123.jpg',
      images: ['/images/maya123.jpg', '/images/maya12.jpg', '/images/maya33.jpg'],
      rating: 4.1,
      priceRange: '$$ - $500-800/night',
      location: 'Remera',
      amenities: [
        "Free WiFi",
        "Restaurant",
        "Bar",
        "Airport Shuttle",
        "Room Service",
        "Free Parking",
        "24‑Hour Front Desk",
        "Garden & Terrace"
      ],
      icon: Building2,
      detailedDescription: 'Maya Residences Rwanda offers apartment-style accommodation that bridges the gap between hotel convenience and home comfort. Located in the growing Remera district, this modern property appeals to extended-stay travelers, families, and those seeking more space than traditional hotel rooms. Each residence features a living area, bedroom, and kitchenette, providing flexibility for different travel styles. The contemporary design incorporates local artistic elements with modern amenities including flat-screen TVs, work desks, and high-speed WiFi. The on-site restaurant serves breakfast, lunch, and dinner with both international and Rwandan options. The bar provides a casual setting for evening relaxation with a selection of beverages and light snacks. The garden and terrace areas offer outdoor spaces for relaxation or informal meetings. Free parking is available for guests with vehicles, and the airport shuttle service provides convenient transportation. The 24-hour front desk ensures assistance is always available. The Remera location provides easy access to the airport, shopping centers, and the Kigali Convention Centre.',
      highlights: [
        'Apartment-style accommodations',
        'Ideal for extended stays',
        'Kitchenettes in rooms',
        'Family-friendly facilities',
        'Free airport shuttle service',
        'Pleasant garden and terrace',
        'Good Remera location',
        'Free parking available'
      ],
      address: 'KG 7 Avenue, Remera, Gasabo',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 10,
      name: 'Kigali Luxury Apartments',
      type: 'apartment',
      description: 'Fully furnished apartments with kitchens, perfect for extended stays and families.',
      image: '/images/KAMI.jpg',
      images: ['/images/KAMI.jpg', '/images/roomss.jpg', '/images/Salon.jpg'],
      rating: 4.5,
      priceRange: '$$$ - $80-150/night',
      location: 'Kimihurura',
      amenities: ['Free WiFi', 'Full Kitchen', 'Washer/Dryer', 'Living Room', 'Parking', 'Security'],
      icon: Home,
      detailedDescription: 'Kigali Luxury Apartments provides the perfect solution for travelers seeking the comfort and convenience of home during extended stays in Kigali. These fully furnished apartments are designed with both functionality and style, offering significantly more space than traditional hotel rooms. Each apartment includes a fully-equipped kitchen with modern appliances, cookware, and dining areas, allowing guests to prepare their own meals and maintain healthy eating habits. Separate living rooms provide space for relaxation, entertainment, or informal work, while bedrooms offer peaceful retreats with quality bedding and ample storage. In-unit washers and dryers add convenience, particularly for longer stays. The apartments feature contemporary furnishings, good natural light, and modern amenities including smart TVs and high-speed WiFi. Security is a priority with 24-hour guards, secure parking, and controlled building access. The Kimihurura location is one of Kigali\'s most desirable neighborhoods, offering proximity to international schools, supermarkets, restaurants, and business districts. Building amenities may include backup power generators ensuring uninterrupted electricity.',
      highlights: [
        'Spacious fully-furnished apartments',
        'Complete kitchens with appliances',
        'In-unit washer and dryer',
        'Ideal for families and extended stays',
        'Secure parking and 24-hour security',
        'Prime Kimihurura location',
        'Weekly and monthly rates available',
        'Home-like comfort and privacy'
      ],
      address: 'KG 11 Avenue, Kimihurura, Gasabo',
      checkInOut: 'Flexible check-in/check-out times'
    },
    {
      id: 11,
      name: 'Urban Stay Apartments',
      type: 'apartment',
      description: 'Modern serviced apartments with weekly rates available. Great for digital nomads and long stays.',
      image: '/images/poivre-noir-kigali.jpg',
      images: ['/images/poivre-noir-kigali.jpg', '/images/pinache.jpg', '/images/villa2.jpg'],
      rating: 4.4,
      priceRange: '$$ - $60-120/night',
      location: 'Kacyiru',
      amenities: ['Free WiFi', 'Kitchen', 'Workspace', 'Cleaning Service', 'Balcony', 'Gym'],
      icon: Home,
      detailedDescription: 'Urban Stay Apartments caters specifically to digital nomads, remote workers, and business travelers requiring extended accommodation in Kigali. These modern serviced apartments combine the independence of self-catering with hotel-like conveniences such as regular cleaning service. Each apartment is designed with productivity in mind, featuring dedicated workspace areas with ergonomic chairs, good lighting, and reliable high-speed WiFi essential for remote work. Kitchens are equipped with everything needed for meal preparation, helping guests save money during longer stays. Private balconies provide outdoor space for breaks, fresh air, and even outdoor working when weather permits. The building\'s shared gym allows guests to maintain fitness routines without additional memberships. Weekly cleaning service keeps apartments fresh without daily intrusions, striking a perfect balance between service and privacy. The Kacyiru location is increasingly popular with expats and business travelers, offering a good mix of restaurants, cafes suitable for co-working, and proximity to government and business districts. The management offers flexible booking terms with attractive weekly and monthly rates.',
      highlights: [
        'Designed for remote workers',
        'Dedicated workspace in each unit',
        'Excellent WiFi connectivity',
        'Weekly cleaning service included',
        'Flexible long-term rates',
        'Shared gym facilities',
        'Private balconies',
        'Great Kacyiru location'
      ],
      address: 'KG 9 Avenue, Kacyiru, Gasabo',
      checkInOut: 'Flexible check-in/check-out arrangements'
    },
    {
      id: 12,
      name: 'Select Boutique',
      type: 'boutique',
      description: 'A charming boutique hotel in Kigali offering personalized comfort, garden terraces, excellent dining, and easy access to the Convention Centre and city attractions',
      image: '/images/select.jpg',
      images: ['/images/select.jpg', '/images/heaven3.jpg', '/images/select1.jpg'],
      rating: 4.6,
      priceRange: '$$ - $90 – $120/night',
      location: 'Nyarutarama',
      amenities: [
        "Free WiFi",
        "2 Restaurants",
        "Bar/Lounge",
        "Free Continental Breakfast",
        "24‑Hour Room Service",
        "Meeting Room",
        "Garden & Terrace",
        "Free Parking"
      ],
      icon: Home,
      detailedDescription: 'Select Boutique brings personalized hospitality and charm to the upscale Nyarutarama neighborhood. This intimate hotel prides itself on attention to detail and creating a welcoming atmosphere that feels more like staying at a friend\'s beautiful home than a commercial hotel. The property features well-maintained gardens and terraces that provide peaceful outdoor spaces for relaxation or casual meetings. Rooms are individually decorated with care, featuring comfortable furnishings, quality linens, and thoughtful amenities. The complimentary continental breakfast showcases fresh local ingredients and homemade items, setting a positive tone for the day. Two on-site restaurants offer variety, serving both international and Rwandan cuisine throughout the day. The bar provides a cozy setting for evening drinks in a relaxed atmosphere. For business needs, a meeting room is available with basic facilities and catering options. The 24-hour room service ensures convenience at any hour. The Nyarutarama location is highly desirable, known for its upscale residential character, international schools, and proximity to the Convention Centre. Free parking is a valuable amenity in this area.',
      highlights: [
        'Charming boutique atmosphere',
        'Beautiful gardens and terraces',
        'Two quality restaurants on-site',
        'Free continental breakfast included',
        'Personalized friendly service',
        'Convenient Nyarutarama location',
        'Near Convention Centre',
        'Free parking provided'
      ],
      address: 'KG 10 Avenue, Nyarutarama, Gasabo',
      checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
    },
  ];

  const filteredAccommodations = activeType === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === activeType);

  // Auto-slide effect for modal
  React.useEffect(() => {
    if (selectedAccommodation) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedAccommodation.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [selectedAccommodation]);

  const openModal = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const openContactForm = (accommodationName: string) => {
    setContactAccommodation(accommodationName);
    setShowContactForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setContactAccommodation('');
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedAccommodation) {
      setCurrentImageIndex((prev) => 
        prev === selectedAccommodation.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAccommodation) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAccommodation.images.length - 1 : prev - 1
      );
    }
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return Wifi;
    if (amenity.toLowerCase().includes('restaurant') || amenity.toLowerCase().includes('dining') || amenity.toLowerCase().includes('breakfast') || amenity.toLowerCase().includes('kitchen')) return Utensils;
    if (amenity.toLowerCase().includes('parking') || amenity.toLowerCase().includes('airport')) return Car;
    return Coffee;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/retreat hote.jpg"
            alt="Kigali Accommodation"
            fill
            priority
            className="object-cover brightness-[0.3]"
            quality={100}
          />
        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Where to Stay in Kigali
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From luxury hotels to budget-friendly hostels, find the perfect accommodation for your stay
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="where-to-stay" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Where to Stay in Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury hotels to budget-friendly hostels, find the perfect accommodation for your Kigali adventure
            </p>
          </div>

          {/* Type Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {types.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeType === type.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{type.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAccommodations.map((accommodation) => {
              const Icon = accommodation.icon;
              return (
                <div
                  key={accommodation.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <Image
                        src={accommodation.image}
                        alt={accommodation.name}
                        fill
                        className="object-cover"
                      />
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {accommodation.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex-1">
                          {accommodation.name}
                        </h3>
                        <div className="flex items-center space-x-1 ml-2 bg-yellow-50 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-gray-900">{accommodation.rating}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-2 text-gray-600 text-sm mb-3">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>{accommodation.location}</span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {accommodation.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-4 text-green-600 font-semibold">
                        <DollarSign className="w-5 h-5" />
                        <span className="text-sm">{accommodation.priceRange}</span>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.amenities.slice(0, 4).map((amenity, index) => {
                          const AmenityIcon = getAmenityIcon(amenity);
                          return (
                            <div
                              key={index}
                              className="flex items-center space-x-1 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                            >
                              <AmenityIcon className="w-3 h-3" />
                              <span>{amenity}</span>
                            </div>
                          );
                        })}
                        {accommodation.amenities.length > 4 && (
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">
                            +{accommodation.amenities.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button 
                          onClick={() => openModal(accommodation)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => openContactForm(accommodation.name)}
                          className="px-4 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
                        >
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips Section */}
          <div className="mt-20 bg-green-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Accommodation Tips for Kigali
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Choose Your Location</h4>
                <p className="text-sm text-green-50">
                  Stay in Kimihurura or Kiyovu for upscale dining, or Nyamirambo for local culture
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Book in Advance</h4>
                <p className="text-sm text-green-50">
                  Hotels fill up quickly during conferences and events. Book early for best rates
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Airport Transfers</h4>
                <p className="text-sm text-green-50">
                  Many hotels offer free airport pickup. Taxi apps like Move and Yego are also available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Similar to Rwanda and other pages */}
      {selectedAccommodation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-6xl w-full my-4 sm:my-8 overflow-hidden relative shadow-2xl z-20 max-h-[95vh] sm:max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-gray-800 text-white rounded-full p-1.5 sm:p-2 hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[95vh] sm:max-h-[85vh]">
              {/* Image Slideshow - Left Side */}
              <div className="w-full lg:w-2/5 relative overflow-hidden h-64 sm:h-80 lg:h-auto">
                <div className="relative h-full">
                  <div 
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {selectedAccommodation.images.map((image: string, index: number) => (
                      <div key={index} className="min-w-full h-full relative">
                        <Image
                          src={image}
                          alt={`${selectedAccommodation.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
                    {selectedAccommodation.images.map((_: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content - Right Side - Scrollable */}
              <div className="w-full lg:w-3/5 overflow-y-auto bg-white">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide leading-tight">
                      {selectedAccommodation.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="font-medium text-sm sm:text-base">{selectedAccommodation.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-bold text-gray-900">{selectedAccommodation.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600 font-semibold text-lg mt-2">
                      <DollarSign className="w-5 h-5" />
                      <span>{selectedAccommodation.priceRange}</span>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        About This Property
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedAccommodation.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Property Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedAccommodation.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Amenities & Services
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedAccommodation.amenities.map((amenity: string, index: number) => {
                          const AmenityIcon = getAmenityIcon(amenity);
                          return (
                            <div key={index} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{amenity}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {selectedAccommodation.address && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                          Address
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="text-sm sm:text-base">{selectedAccommodation.address}</span>
                        </div>
                      </div>
                    )}

                    {selectedAccommodation.checkInOut && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                          Check-In & Check-Out
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                          {selectedAccommodation.checkInOut}
                        </p>
                      </div>
                    )}

                    <div className="pt-4 sm:pt-6 pb-2 sm:pb-4 sticky bottom-0 bg-white border-t border-gray-200">
                      <button 
                        onClick={() => {
                          openContactForm(selectedAccommodation.name);
                          closeModal();
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-md font-semibold transition-colors uppercase tracking-wide text-sm sm:text-base"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactInquiryForm
          accommodationName={contactAccommodation}
          onClose={closeContactForm}
        />
      )}
    </div>
  );
};

export default WhereToStay;