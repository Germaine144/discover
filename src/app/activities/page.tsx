'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bike, Music, Utensils, Coffee, ShoppingBag, Heart, Users, Compass, Calendar, Star, X, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import ContactInquiryForm from '@/components/ContactInquiryForm';

interface Activity {
  id: number;
  name: string;
  category: 'adventure' | 'culture' | 'food' | 'nightlife' | 'shopping' | 'wellness' | 'social';
  description: string;
  image: string;
  images: string[];
  duration?: string;
  priceRange: '$' | '$$' | '$$$';
  bestFor: string[];
  icon: any;
  detailedDescription: string;
  highlights: string[];
  location?: string;
  included?: string;
}

const ThingsToDo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingActivityName, setBookingActivityName] = useState('');

  const categories = [
    { id: 'all', name: 'All Activities', icon: Compass },
    { id: 'adventure', name: 'Adventure', icon: Bike },
    { id: 'culture', name: 'Culture & Arts', icon: Music },
    { id: 'food', name: 'Food & Drink', icon: Utensils },
    { id: 'nightlife', name: 'Nightlife', icon: Music },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag },
    { id: 'wellness', name: 'Wellness', icon: Heart },
    { id: 'social', name: 'Social & Events', icon: Users },
  ];

  const activities: Activity[] = [
    {
      id: 1,
      name: 'Fun & Games',
      category: 'social',
      description: 'Fun & Games in Kigali give people a chance to relax and enjoy their time together.',
      image: '/images/universal.jpg',
      images: ['/images/universal.jpg', '/images/game1.jpg', '/images/game2.jpg'],
      duration: '3-4 hours',
      priceRange: '$',
      bestFor: ['Social Fun', 'Making Friends', 'Group Hangouts'],
      icon: Users,
      detailedDescription: 'Fun & Games in Kigali offers the perfect opportunity to unwind, connect with others, and create memorable experiences. This vibrant social scene includes various entertainment venues, game centers, and interactive spaces where friends, families, and colleagues gather to enjoy quality time together. From board game cafes to bowling alleys, escape rooms to arcade centers, Kigali provides diverse options for social entertainment. These venues create a relaxed atmosphere where people can laugh, compete, and bond over shared experiences. Whether you\'re looking to break the ice with new acquaintances, strengthen friendships, or simply have a fun-filled evening, Kigali\'s entertainment spaces provide the ideal setting. Many venues also offer food and beverage services, making them perfect for extended hangout sessions. The city\'s game culture embraces both traditional and modern entertainment, offering something for every age group and interest.',
      highlights: [
        'Board game cafes with hundreds of game options',
        'Modern bowling alleys and sports entertainment',
        'Challenging escape rooms and puzzle experiences',
        'Arcade centers with classic and new games',
        'Pool halls and billiards venues',
        'Karaoke lounges for musical entertainment',
        'Group-friendly atmosphere and packages'
      ],
      location: 'Various locations across Kigali',
      included: 'Game access, venue facilities, and friendly staff assistance'
    },
    {
      id: 2,
      name: 'Coffee Tasting Tour',
      category: 'food',
      description: 'Discover Rwanda\'s world-renowned coffee culture. Visit local roasteries, learn about the coffee-making process, and taste different brews.',
      image: '/images/coffe.jpg',
      images: ['/images/coffe.jpg', '/images/coffe1.jpg', '/images/coffe11.jpg'],
      duration: '2-3 hours',
      priceRange: '$$',
      bestFor: ['Coffee Lovers', 'Foodies', 'Cultural Learning'],
      icon: Coffee,
      detailedDescription: 'Embark on a sensory journey through Rwanda\'s exceptional coffee heritage with our comprehensive coffee tasting tour. Rwanda is celebrated globally for producing some of the world\'s finest Arabica coffee, and this tour provides an intimate look at every step of the coffee journey from bean to cup. Visit artisanal roasteries where expert roasters share their craft and passion for coffee. Learn about Rwanda\'s unique coffee-growing regions, the impact of altitude and climate on flavor profiles, and the meticulous processing methods that make Rwandan coffee distinctive. The tour includes guided tastings where you\'ll develop your palate, learning to identify flavor notes ranging from fruity and floral to chocolatey and nutty. Expert baristas demonstrate various brewing methods including pour-over, French press, and espresso, explaining how each technique highlights different characteristics of the beans. You\'ll also learn about Rwanda\'s coffee cooperatives and how coffee production supports local communities and sustainable farming practices.',
      highlights: [
        'Visit multiple specialty coffee roasteries',
        'Guided cupping sessions with coffee experts',
        'Learn about Rwanda\'s coffee growing regions',
        'Hands-on brewing demonstrations',
        'Understand different roasting profiles',
        'Meet local coffee farmers and roasters',
        'Take home freshly roasted coffee beans'
      ],
      location: 'Kigali coffee roasteries and cafes',
      included: 'Multiple coffee tastings, expert guide, roastery tours, coffee samples to take home'
    },
    {
      id: 3,
      name: 'Cycling Through the City',
      category: 'adventure',
      description: 'Explore Kigali\'s hills and neighborhoods on two wheels. Guided bike tours available or rent and explore on your own.',
      image: '/images/riding.jpg',
      images: ['/images/riding.jpg', '/images/cyltour.jpg', '/images/riding.jpg'],
      duration: '2-4 hours',
      priceRange: '$$',
      bestFor: ['Adventure Seekers', 'Fitness Enthusiasts', 'Sightseeing'],
      icon: Bike,
      detailedDescription: 'Experience Kigali from a unique perspective as you pedal through the city\'s famous rolling hills and vibrant neighborhoods. This cycling adventure offers both guided tours led by knowledgeable local guides and self-guided options for independent explorers. Navigate through Kigali\'s clean, well-maintained streets, discovering hidden gems and local hotspots that most tourists miss. The guided tours take you through various districts, each with its own character and story. Ride through upscale neighborhoods with stunning city views, visit local markets bustling with activity, and cruise along the city\'s growing network of bike-friendly routes. Your guide shares insights about Kigali\'s remarkable transformation, pointing out landmarks and explaining the city\'s urban development. The tours can be customized to match your fitness level, from leisurely rides focusing on culture and sightseeing to more challenging routes that tackle Kigali\'s famous hills. Along the way, stop at viewpoints for photographs, visit local cafes for refreshments, and interact with friendly residents.',
      highlights: [
        'Explore multiple Kigali neighborhoods',
        'Professional guide with local knowledge',
        'Quality bike and safety equipment provided',
        'Stops at scenic viewpoints',
        'Visit local markets and attractions',
        'Suitable for various fitness levels',
        'Small group sizes for personalized experience'
      ],
      location: 'Starting point varies by tour operator',
      included: 'Bike rental, helmet, guide (for guided tours), water, and safety briefing'
    },
    {
      id: 4,
      name: 'Live Music at Inema Arts Center',
      category: 'culture',
      description: 'Enjoy live performances, art exhibitions, and cultural events at this vibrant arts hub. Weekly events featuring local and international artists.',
      image: '/images/night.jpg',
      images: ['/images/night.jpg', '/images/live.jpg', '/images/cyltour1.jpg'],
      duration: '2-3 hours',
      priceRange: '$$',
      bestFor: ['Art Lovers', 'Music Fans', 'Culture Enthusiasts'],
      icon: Music,
      detailedDescription: 'Inema Arts Center stands as a beacon of creativity and cultural expression in Kigali, offering an immersive experience that combines visual arts, live music, and community gathering. This dynamic space hosts regular events featuring both established and emerging artists from Rwanda and across Africa. The center\'s gallery walls showcase contemporary African art, with rotating exhibitions that challenge perspectives and celebrate creativity. On event nights, the space transforms into a vibrant venue filled with the sounds of live music ranging from traditional Rwandan rhythms to jazz, Afrobeat, and contemporary fusion. The intimate setting allows for close interaction between performers and audience, creating an electric atmosphere. Between performances, explore the artists\' studios, watch creative processes unfold, and engage in conversations about art and culture. The center also features an outdoor courtyard perfect for socializing, with a bar serving local and international beverages. Special events include poetry slams, film screenings, dance performances, and themed cultural nights that celebrate Rwanda\'s rich heritage.',
      highlights: [
        'Live music performances multiple nights weekly',
        'Contemporary art gallery exhibitions',
        'Meet and interact with local artists',
        'Artist studio tours and demonstrations',
        'Outdoor courtyard venue',
        'Bar with local craft beverages',
        'Regular cultural events and workshops'
      ],
      location: 'Kacyiru, Kigali',
      included: 'Event entry, art gallery access, and vibrant cultural atmosphere'
    },
    {
      id: 5,
      name: 'Traditional Rwandan Cooking Class',
      category: 'food',
      description: 'Learn to cook authentic Rwandan dishes like Isombe, Ubugali, and Brochettes. Hands-on experience with local chefs.',
      image: '/images/local1.jpg',
      images: ['/images/local1.jpg', '/images/download (6)1.jpg', '/images/chief1.jpg'],
      duration: '3-4 hours',
      priceRange: '$$',
      bestFor: ['Foodies', 'Cultural Experience', 'Hands-on Learning'],
      icon: Utensils,
      detailedDescription: 'Immerse yourself in Rwanda\'s culinary traditions with this comprehensive cooking class led by experienced local chefs. This hands-on experience goes beyond just following recipes—it\'s a cultural journey that connects you with Rwanda\'s food heritage. Begin with a visit to a local market where your chef guide helps you select fresh ingredients, explaining the significance of each item in Rwandan cuisine and sharing tips for identifying quality produce. Return to the cooking studio or traditional kitchen where you\'ll learn to prepare several authentic dishes. Master the art of making Isombe (cassava leaves with eggplant), Ubugali (cassava or corn flour dough), perfectly grilled Brochettes (meat skewers), and other traditional favorites. Your chef explains traditional cooking techniques, the cultural significance of different dishes, and how meals bring families and communities together in Rwandan culture. Learn about local spices, traditional cooking methods, and regional variations in recipes. The class concludes with a communal meal where you enjoy the fruits of your labor, sharing stories and cultural insights with fellow participants.',
      highlights: [
        'Visit local market with chef guide',
        'Prepare multiple traditional dishes',
        'Learn authentic cooking techniques',
        'Understand cultural food traditions',
        'Hands-on cooking experience',
        'Enjoy your prepared meal together',
        'Recipe cards to take home'
      ],
      location: 'Various cooking schools and cultural centers',
      included: 'Market visit, all ingredients, cooking instruction, shared meal, recipes, and apron'
    },
    {
      id: 6,
      name: 'Nightlife at Heaven Restaurant & Club',
      category: 'nightlife',
      description: 'Experience Kigali\'s vibrant nightlife scene. Live DJ sets, dancing, and a great atmosphere with panoramic city views.',
      image: '/images/the-retreat.jpg',
      images: ['/images/the-retreat.jpg', '/images/heaven.jpg', '/images/clubs.jpg'],
      duration: 'Evening/Night',
      priceRange: '$$',
      bestFor: ['Night Owls', 'Party Lovers', 'Socializing'],
      icon: Music,
      detailedDescription: 'Heaven Restaurant & Club offers one of Kigali\'s most spectacular nightlife experiences, combining world-class dining, panoramic city views, and an electric party atmosphere. Perched on a hilltop, the venue provides breathtaking 360-degree views of Kigali\'s twinkling lights, creating a magical backdrop for your evening. Start with dinner at the restaurant, where talented chefs prepare international and fusion cuisine in a sophisticated setting. As night falls, the venue transitions into one of the city\'s hottest nightspots. Professional DJs spin everything from Afrobeat and hip-hop to house and international hits, keeping the dance floor energized until the early hours. The club features multiple levels and areas, from intimate lounges perfect for conversation to the main dance floor where the party reaches its peak. The bar serves creative cocktails, premium spirits, and champagne for those celebrating special occasions. The crowd is diverse and international, creating a cosmopolitan atmosphere. Regular themed nights, special events, and guest DJ appearances keep the experience fresh and exciting.',
      highlights: [
        'Spectacular panoramic city views',
        'Fine dining restaurant and club',
        'Professional DJ entertainment',
        'Multiple levels and seating areas',
        'Premium cocktails and bottle service',
        'International and local crowd',
        'Regular themed events and parties'
      ],
      location: 'Kigali Heights, Nyarutarama',
      included: 'Venue access, entertainment, and unforgettable atmosphere'
    },
    {
      id: 7,
      name: 'City Running Adventure',
      category: 'adventure',
      description: 'Enjoy running in Kacyiru and Kimihurura, staying fit, meeting people, and experiencing Kigali lively and safe streets daily.',
      image: '/images/raaa.jpg',
      images: ['/images/raaa.jpg', '/images/runs.jpg', '/images/raaa.jpg'],
      duration: '2-3 hours',
      priceRange: '$',
      bestFor: ['Fitness', 'Outdoor Adventure', 'Community Connection'],
      icon: Bike,
      detailedDescription: 'Join Kigali\'s thriving running community and experience the city\'s safest and most scenic routes through the neighborhoods of Kacyiru and Kimihurura. This running adventure is more than just exercise—it\'s a social experience that connects you with locals and fellow fitness enthusiasts while exploring the city\'s beautiful residential areas and commercial districts. The running culture in Kigali is welcoming and inclusive, with groups of varying pace levels ensuring everyone can participate comfortably. Routes are carefully selected to showcase the city\'s impressive urban planning, clean streets, and friendly neighborhoods. Run past modern buildings, local markets, and green spaces while enjoying the fresh morning or evening air. The city\'s famous hills provide natural interval training, helping you build strength and endurance. Local running clubs organize regular meetups, often starting early in the morning to beat the heat, with post-run socializing at local cafes becoming a cherished ritual. Safety is a priority, with well-lit streets and a strong community presence making Kigali one of Africa\'s safest cities for outdoor activities.',
      highlights: [
        'Join organized running groups',
        'Explore Kacyiru and Kimihurura neighborhoods',
        'Meet local and international runners',
        'Safe, well-maintained routes',
        'Multiple distance and pace options',
        'Post-run social gatherings',
        'Regular weekly schedules'
      ],
      location: 'Kacyiru and Kimihurura districts',
      included: 'Running routes, community support, and local knowledge'
    },
    {
      id: 8,
      name: 'Yoga & Wellness Retreat',
      category: 'wellness',
      description: 'Relax and rejuvenate with yoga classes, meditation sessions, and wellness workshops at various studios around the city.',
      image: '/images/yoga2.jpg',
      images: ['/images/yoga2.jpg', '/images/yoga22.jpg', '/images/yoga2.jpg'],
      duration: '1-2 hours',
      priceRange: '$$',
      bestFor: ['Wellness Seekers', 'Relaxation', 'Mindfulness'],
      icon: Heart,
      detailedDescription: 'Discover inner peace and physical rejuvenation at Kigali\'s growing collection of yoga studios and wellness centers. These sanctuaries offer refuge from the busy city, providing spaces designed for relaxation, healing, and personal growth. Professional instructors guide you through various yoga styles, from gentle Hatha and restorative practices to more dynamic Vinyasa and Power Yoga sessions. Each class is thoughtfully structured to accommodate different skill levels, ensuring both beginners and experienced practitioners feel welcomed and challenged appropriately. Beyond physical postures, the sessions incorporate breathing techniques, meditation, and mindfulness practices that promote mental clarity and emotional balance. Many studios offer specialized workshops on topics like stress management, sound healing, and Ayurvedic wellness. The facilities often feature serene environments with natural light, plants, and calming décor that enhance the practice. Some studios include additional amenities such as wellness cafes serving healthy smoothies and snacks, retail sections with yoga equipment and wellness products, and outdoor spaces for practicing in nature.',
      highlights: [
        'Multiple yoga styles and levels',
        'Experienced certified instructors',
        'Meditation and mindfulness sessions',
        'Wellness workshops and events',
        'Peaceful, well-designed studios',
        'Drop-in classes and packages available',
        'Community of wellness-focused individuals'
      ],
      location: 'Various studios across Kigali',
      included: 'Yoga class, mat rental (if needed), and peaceful environment'
    },
    {
      id: 9,
      name: 'The Retreat',
      category: 'social',
      description: 'A deluxe hotel offering premium comfort, modern amenities, and an exceptional experience in Kigali vibrant setting.',
      image: '/images/retreat hote.jpg',
      images: ['/images/retreat hote.jpg', '/images/retreat hote.jpg', '/images/retreat hote.jpg'],
      duration: '2-3 hours',
      priceRange: '$$',
      bestFor: ['Luxury Stay', 'Cultural Learning', 'Community Support'],
      icon: Users,
      detailedDescription: 'The Retreat stands as a beacon of luxury and comfort in Kigali, offering guests an exceptional hospitality experience that blends modern amenities with warm Rwandan hospitality. This deluxe hotel provides meticulously designed rooms and suites featuring contemporary décor, premium bedding, and state-of-the-art facilities. Each space is thoughtfully appointed with attention to detail, ensuring maximum comfort and convenience. Beyond accommodation, The Retreat serves as a cultural hub where guests can engage with Rwanda\'s rich heritage through curated experiences. The hotel\'s restaurant showcases both international cuisine and traditional Rwandan dishes, prepared by skilled chefs using locally-sourced ingredients. The bar and lounge areas provide sophisticated settings for business meetings or social gatherings, with panoramic views of the city. Guests can enjoy the wellness center featuring a modern gym, spa services, and a sparkling pool perfect for relaxation. The hotel\'s commitment to community development is evident in its employment practices and partnerships with local artisans and suppliers, ensuring your stay contributes positively to the local economy.',
      highlights: [
        'Luxuriously appointed rooms and suites',
        'Fine dining restaurant and bar',
        'Modern wellness center and spa',
        'Swimming pool and fitness facilities',
        'Business center and meeting rooms',
        'Concierge services for local experiences',
        'Support for local community initiatives'
      ],
      location: 'Prime location in Kigali',
      included: 'Accommodation, breakfast, WiFi, and access to hotel facilities'
    },
    {
      id: 10,
      name: 'Hike Mount Kigali',
      category: 'adventure',
      description: 'Challenge yourself with a hike up Mount Kigali for breathtaking 360° views of the city. Best in early morning or late afternoon.',
      image: '/images/hikiong.jpg',
      images: ['/images/hikiong.jpg', '/images/hikings.jpg', '/images/hikingfs.jpg'],
      duration: '2-3 hours',
      priceRange: '$',
      bestFor: ['Hikers', 'Nature Lovers', 'Photography'],
      icon: Bike,
      detailedDescription: 'Mount Kigali offers one of the most rewarding hiking experiences in the capital, combining physical challenge with spectacular panoramic views that make every step worthwhile. This popular trail attracts both locals and visitors seeking adventure and stunning photography opportunities. The hike begins at the mountain\'s base, where marked trails guide you upward through a mix of natural vegetation and developed paths. As you ascend, the city gradually reveals itself below, with each elevation gain offering new perspectives of Kigali\'s famous hills and urban landscape. The trail includes both gentle slopes and steeper sections, providing a good workout while remaining accessible to moderately fit hikers. Local guides are available to lead groups, sharing information about the mountain\'s ecology, pointing out native plants and birds, and ensuring safe navigation. The summit rewards your effort with unobstructed 360-degree views encompassing the entire city and surrounding countryside. Early morning hikes offer the chance to watch the sunrise paint the sky in brilliant colors, while late afternoon climbs provide perfect conditions for sunset photography.',
      highlights: [
        '360-degree panoramic city views',
        'Well-maintained hiking trails',
        'Sunrise and sunset hiking options',
        'Local guides available',
        'Native flora and fauna',
        'Photography opportunities',
        'Accessible for moderate fitness levels'
      ],
      location: 'Mount Kigali, accessible from city center',
      included: 'Trail access, optional guide services, and spectacular views'
    },
    {
      id: 11,
      name: 'Craft Shopping at Caplaki Craft Village',
      category: 'shopping',
      description: 'Browse beautiful handmade crafts, jewelry, and artwork by local artisans. Perfect for unique gifts and authentic souvenirs.',
      image: '/images/craft2.jpg',
      images: ['/images/craft2.jpg', '/images/craft11.jpg', '/images/crafft22.jpg'],
      duration: '1-2 hours',
      priceRange: '$$',
      bestFor: ['Art Collectors', 'Gift Shopping', 'Supporting Local'],
      icon: ShoppingBag,
      detailedDescription: 'Caplaki Craft Village represents the heart of Rwanda\'s artisan community, offering an authentic shopping experience where creativity, tradition, and commerce blend seamlessly. This vibrant marketplace brings together talented craftspeople from across Rwanda, each specializing in different traditional and contemporary arts. Wander through stalls displaying an impressive array of handwoven baskets in intricate geometric patterns—a craft Rwanda is famous for worldwide. These baskets, known as Agaseke, are created using traditional techniques passed down through generations, with each pattern telling a story. Discover beautiful jewelry crafted from local materials including beads, leather, and recycled materials transformed into stunning accessories. Browse wooden carvings ranging from small decorative pieces to larger sculptures, paintings that capture Rwanda\'s landscapes and culture, and textiles including hand-dyed fabrics and traditional Imigongo art. The village atmosphere encourages interaction with artisans, many of whom work on-site, allowing you to watch the creative process and understand the skill involved. Friendly vendors are happy to explain their techniques and the cultural significance of different items.',
      highlights: [
        'Traditional Agaseke basket weaving',
        'Handcrafted jewelry and accessories',
        'Wood carvings and sculptures',
        'Contemporary and traditional paintings',
        'Imigongo art and textiles',
        'Direct interaction with artisans',
        'Fair trade and artisan support'
      ],
      location: 'Kimihurura, near downtown Kigali',
      included: 'Market access, artisan interactions, and unique handmade items'
    },
    {
      id: 12,
      name: 'Sundowner at Repub Lounge',
      category: 'nightlife',
      description: 'Enjoy cocktails and stunning sunset views from one of Kigali\'s most popular rooftop lounges. Perfect for unwinding after a day of exploring.',
      image: '/images/nigh3.jpg',
      images: ['/images/nigh3.jpg', '/images/Sip & dip.jpg', '/images/heaven1.jpg'],
      duration: '2-3 hours',
      priceRange: '$$$',
      bestFor: ['Cocktail Lovers', 'Romantic Evening', 'City Views'],
      icon: Music,
      detailedDescription: 'Repub Lounge has earned its reputation as one of Kigali\'s premier sunset destinations, offering a sophisticated atmosphere where stunning views meet exceptional service and creative mixology. This rooftop sanctuary provides the perfect setting to unwind after a day of city exploration or to kick off an evening out. As the sun begins its descent, the lounge transforms into a magical space where the sky erupts in shades of orange, pink, and purple, painting the cityscape below in golden light. The expertly crafted cocktail menu features both classic favorites and innovative signature creations using fresh, local ingredients. Skilled bartenders prepare each drink with precision and flair, recommending perfect pairings based on your preferences. The food menu complements the drinks with a selection of tapas, small plates, and sharing platters designed for grazing and socializing. The lounge\'s contemporary design incorporates comfortable seating arrangements ranging from intimate tables for two to larger group setups, all positioned to maximize the breathtaking views. Background music sets a relaxed yet sophisticated tone, loud enough to create ambiance but quiet enough to allow conversation.',
      highlights: [
        'Spectacular sunset views',
        'Rooftop setting with panoramic vistas',
        'Creative cocktail menu',
        'Skilled mixologists and bartenders',
        'Sophisticated small plates and tapas',
        'Comfortable, stylish ambiance',
        'Perfect for romantic evenings or socializing'
      ],
      location: 'Downtown Kigali, rooftop location',
      included: 'Lounge access, menu service, and unforgettable sunset experience'
    },
  ];

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  // Auto-slide effect for modal
  React.useEffect(() => {
    if (selectedActivity) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedActivity.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [selectedActivity]);

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === selectedActivity.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedActivity.images.length - 1 : prev - 1
      );
    }
  };

  const handleBooking = (activityName: string) => {
    setBookingActivityName(activityName);
    setShowBookingForm(true);
    // Close the activity modal when opening booking form
    if (selectedActivity) {
      setSelectedActivity(null);
      document.body.style.overflow = 'unset';
    }
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setBookingActivityName('');
  };

  const getPriceColor = (price: string) => {
    switch (price) {
      case '$': return 'text-green-600';
      case '$$': return 'text-yellow-600';
      case '$$$': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/Kigali123.jpg"
            alt="Kigali Activities"
            fill
            priority
            className="object-cover brightness-[0.4]"
            quality={100}
          />
        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Things to Do in Kigali
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          From cultural experiences to adventure activities, discover unforgettable experiences across Kigali, including museums, festivals, hiking, cycling, local cuisine, nightlife, community tours, and scenic views that inspire every visitor today now
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="things-to-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Things to Do in Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cultural experiences to adventure activities, discover unforgettable experiences in the heart of Rwanda
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Duration Badge */}
                    {activity.duration && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{activity.duration}</span>
                      </div>
                    )}
                    {/* Price Badge */}
                    <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold ${getPriceColor(activity.priceRange)}`}>
                      {activity.priceRange}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Icon & Name */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                        {activity.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {activity.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {activity.description}
                    </p>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.bestFor.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => openModal(activity)}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Star className="w-4 h-4" />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Popular Experiences Section */}
          <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Popular Experiences
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Tours</h4>
                <p className="text-sm text-gray-600">Authentic local experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Food Adventures</h4>
                <p className="text-sm text-gray-600">Taste Rwanda's flavors</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Bike className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Outdoor Activities</h4>
                <p className="text-sm text-gray-600">Adventure awaits</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Music className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Arts & Culture</h4>
                <p className="text-sm text-gray-600">Creative experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Similar to Rwanda and PlacesToVisit Pages */}
      {selectedActivity && (
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
                    {selectedActivity.images.map((image: string, index: number) => (
                      <div key={index} className="min-w-full h-full relative">
                        <Image
                          src={image}
                          alt={`${selectedActivity.name} ${index + 1}`}
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
                    {selectedActivity.images.map((_: string, index: number) => (
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
                      {selectedActivity.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                      {selectedActivity.duration && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          <span className="font-medium text-sm sm:text-base">{selectedActivity.duration}</span>
                        </div>
                      )}
                      <div className={`text-2xl font-bold ${getPriceColor(selectedActivity.priceRange)}`}>
                        {selectedActivity.priceRange}
                      </div>
                    </div>
                    {selectedActivity.location && (
                      <div className="flex items-center space-x-2 text-gray-600 mt-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{selectedActivity.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        About This Experience
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedActivity.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Experience Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedActivity.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Best For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedActivity.bestFor.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="text-sm bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedActivity.included && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                          What&apos;s Included
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {selectedActivity.included}
                        </p>
                      </div>
                    )}

                    <div className="pt-4 sm:pt-6 pb-2 sm:pb-4 sticky bottom-0 bg-white border-t border-gray-200">
                      <button 
                        onClick={() => handleBooking(selectedActivity.name)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-md font-semibold transition-colors uppercase tracking-wide text-sm sm:text-base"
                      >
                        Book This Experience
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <ContactInquiryForm
          activityName={bookingActivityName}
          onClose={closeBookingForm}
          type="activity"
        />
      )}
    </div>
  );
};

export default ThingsToDo;