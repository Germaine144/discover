'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Star, Camera, Coffee, Utensils, Palette, TreePine, Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Place {
  id: number;
  name: string;
  category: 'museum' | 'viewpoint' | 'cafe' | 'restaurant' | 'park' | 'art' | 'recreation';
  description: string;
  image: string;
  rating?: number;
  bestTime?: string;
  highlights: string[];
  icon: any;
  images: string[];
  detailedDescription: string;
  address?: string;
  priceRange?: string;
}

const PlacesToVisit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Places', icon: MapPin },
    { id: 'museum', name: 'Museums & Culture', icon: Camera },
    { id: 'viewpoint', name: 'Viewpoints', icon: Camera },
    { id: 'cafe', name: 'Cafés', icon: Coffee },
    { id: 'restaurant', name: 'Restaurants', icon: Utensils },
    { id: 'park', name: 'Parks & Nature', icon: TreePine },
    { id: 'art', name: 'Art & Creative', icon: Palette },
    { id: 'recreation', name: 'Recreation', icon: Building2 },
  ];

  const places: Place[] = [
    {
      id: 1,
      name: 'Kandt House Museum of Natural History',
      category: 'museum',
      description: 'Explore Rwanda\'s rich colonial and natural history in this beautifully preserved building, once home to German explorer Richard Kandt.',
      image: '/images/KandtHouse.jpg',
      images: ['/images/KandtHouse.jpg', '/images/muse1.jpg', '/images/muse2.jpg'],
      rating: 4.5,
      bestTime: '9:00 AM - 5:00 PM',
      highlights: ['Colonial Architecture', 'Natural History Exhibits', 'Historical Artifacts', 'Educational Tours'],
      icon: Camera,
      detailedDescription: 'The Kandt House Museum of Natural History is a fascinating journey through Rwanda\'s past. Named after German explorer Richard Kandt, who founded modern Kigali, this beautifully preserved colonial building now serves as a museum showcasing Rwanda\'s rich natural heritage. The museum features extensive collections of preserved wildlife specimens, geological samples, and exhibits on Rwanda\'s biodiversity. Visitors can explore displays on local flora and fauna, learn about the country\'s geological formation, and discover the story of Kigali\'s founding. The museum also offers educational programs and guided tours that provide deeper insights into Rwanda\'s natural history and conservation efforts.',
      address: 'KN 4 Ave, Kigali',
      priceRange: '5,000 RWF'
    },
    {
      id: 2,
      name: 'Nature Kigali',
      category: 'viewpoint',
      description: 'Kigali Nature is a peaceful restaurant surrounded by greenery, offering fresh and delicious meals in a calm environment. It is a perfect place to relax, meet friends, and enjoy nature in the heart of Kigali!',
      image: '/images/naturekigali1.jpg',
      images: ['/images/naturekigali1.jpg', '/images/nature2.jpg', '/images/nature1.jpg'],
      rating: 4.8,
      bestTime: 'Sunset (5:30-6:30 PM)',
      highlights: ['360° City Views', 'Sunset Photography', 'Peaceful Atmosphere', 'Off the Beaten Path'],
      icon: Camera,
      detailedDescription: 'Nature Kigali offers a unique dining experience surrounded by lush greenery and natural beauty. This peaceful restaurant provides a serene escape from the bustling city, where you can enjoy fresh, locally-sourced meals prepared with care. The restaurant\'s design seamlessly integrates with the natural landscape, creating a harmonious atmosphere perfect for relaxation. Whether you\'re meeting friends for lunch, enjoying a romantic dinner, or simply seeking a quiet place to unwind, Nature Kigali provides the perfect setting. The menu features a variety of fresh dishes, from traditional Rwandan cuisine to international favorites, all prepared with ingredients from local farms. The outdoor seating area offers stunning views, especially during sunset when the golden light filters through the trees.',
      address: 'Nyarutarama, Kigali',
      priceRange: '8,000 - 15,000 RWF'
    },
    {
      id: 3,
      name: 'Inzora Rooftop Café',
      category: 'cafe',
      description: 'Stylish rooftop café offering stunning city views, great coffee, and a vibrant atmosphere perfect for relaxing or working.',
      image: '/images/inzora1.jpg',
      images: ['/images/inzora1.jpg', '/images/inzora.jpg', '/images/inzora11.jpg'],
      rating: 4.7,
      bestTime: 'Afternoon & Evening',
      highlights: ['Rooftop Views', 'Specialty Coffee', 'Modern Ambiance', 'Free WiFi'],
      icon: Coffee,
      detailedDescription: 'Perched atop one of Kigali\'s modern buildings, Inzora Rooftop Café has become a favorite destination for coffee lovers and digital nomads alike. This stylish establishment offers panoramic views of the city\'s rolling hills and bustling streets below. The café specializes in expertly crafted coffee beverages, sourced from Rwanda\'s finest coffee-growing regions. Their baristas are trained in various brewing methods, from pour-over to espresso, ensuring each cup is perfectly prepared. The modern, minimalist interior design creates a sophisticated yet comfortable atmosphere, with plenty of natural light and contemporary furnishings. Free high-speed WiFi makes it an ideal workspace during the day, while the evening ambiance transforms it into a perfect spot for casual meetings or romantic encounters. The menu extends beyond coffee to include fresh pastries, light meals, and refreshing beverages.',
      address: 'KN 4 Ave, Kacyiru, Kigali',
      priceRange: '3,000 - 8,000 RWF'
    },
    {
      id: 4,
      name: 'Kigali Golf Club & Villas',
      category: 'recreation',
      description: 'Premium golf course with lush greens and beautiful surroundings. Open to visitors for a round of golf or just to enjoy the scenery.',
      image: '/images/golf1.jpg',
      images: ['/images/golf1.jpg', '/images/golf1.jpg', '/images/golf1.jpg'],
      rating: 4.6,
      bestTime: 'Morning (7:00-11:00 AM)',
      highlights: ['18-Hole Course', 'Clubhouse Dining', 'Pro Shop', 'Scenic Views'],
      icon: Building2,
      detailedDescription: 'Kigali Golf Club & Villas represents the pinnacle of golfing excellence in Rwanda. This prestigious 18-hole championship golf course is meticulously maintained and offers challenging play for golfers of all skill levels. The course is set against a backdrop of Kigali\'s stunning landscape, with each hole offering unique challenges and breathtaking views. The rolling fairways, strategic bunkers, and well-manicured greens provide an exceptional golfing experience. Beyond golf, the facility features a modern clubhouse with fine dining options, a fully-stocked pro shop offering the latest equipment and apparel, and practice facilities including a driving range and putting greens. Professional golf lessons are available from experienced instructors. The club also hosts tournaments and social events throughout the year. Whether you\'re a serious golfer or simply looking to enjoy the beautiful surroundings, Kigali Golf Club welcomes visitors and members alike.',
      address: 'Nyarutarama, Kigali',
      priceRange: 'Green fees from 50,000 RWF'
    },
    {
      id: 5,
      name: 'Azizi Life Studio',
      category: 'art',
      description: 'Immersive cultural experience where you can learn traditional Rwandan crafts, weaving, and connect with local artisans.',
      image: '/images/azizi.jpg',
      images: ['/images/azizi.jpg', '/images/azizi2.jpg', '/images/azizi.jpg'],
      rating: 4.9,
      bestTime: 'By Appointment',
      highlights: ['Cultural Workshops', 'Traditional Crafts', 'Meet Artisans', 'Handmade Souvenirs'],
      icon: Palette,
      detailedDescription: 'Azizi Life Studio offers an authentic and immersive journey into Rwanda\'s rich cultural heritage through hands-on craft experiences. This unique studio serves as a bridge between visitors and local artisan communities, providing meaningful cultural exchange opportunities. Visitors can participate in traditional weaving workshops, learning the ancient art of basket-making using techniques passed down through generations. The skilled artisans share their stories, techniques, and cultural significance of their crafts. Each workshop is intimate and personalized, ensuring participants receive individual attention and create their own unique pieces to take home. Beyond weaving, the studio offers experiences in traditional dance, cooking classes featuring Rwandan cuisine, and storytelling sessions. All workshops directly support local communities, with fair wages and sustainable practices at the core of their mission. The studio also features a boutique where visitors can purchase authentic, handcrafted items, knowing their purchase supports artisan livelihoods.',
      address: 'Kimihurura, Kigali',
      priceRange: 'Workshops from 25,000 RWF'
    },
    {
      id: 6,
      name: 'Nyarutarama Lake',
      category: 'park',
      description: 'Serene lake surrounded by walking trails and green spaces. Perfect for morning jogs, picnics, and bird watching.',
      image: '/images/resort day.jpg',
      images: ['/images/resort day.jpg', '/images/nature1.jpg', '/images/nature2.jpg'],
      rating: 4.4,
      bestTime: 'Early Morning or Late Afternoon',
      highlights: ['Nature Walks', 'Bird Watching', 'Peaceful Setting', 'Jogging Trails'],
      icon: TreePine,
      detailedDescription: 'Nyarutarama Lake is a hidden oasis in the heart of Kigali, offering a peaceful retreat from urban life. This serene body of water is surrounded by well-maintained walking trails that wind through lush greenery and offer stunning views of the lake and surrounding landscape. The area is a haven for nature enthusiasts, particularly bird watchers, who can spot numerous species of local and migratory birds throughout the year. Early morning visitors often enjoy the misty atmosphere as the sun rises over the water, creating perfect conditions for photography and reflection. The paved jogging trails are popular with fitness enthusiasts, offering a scenic route for morning or evening runs. Scattered benches and picnic areas provide perfect spots for families to gather and enjoy outdoor meals. The lake\'s ecosystem supports diverse wildlife, and educational signage along the trails provides information about local flora and fauna. The peaceful ambiance makes it an ideal location for meditation, yoga, or simply enjoying nature\'s tranquility.',
      address: 'Nyarutarama, Kigali',
      priceRange: 'Free entry'
    },
    {
      id: 7,
      name: 'Poivre Noir',
      category: 'restaurant',
      description: 'Upscale restaurant serving exquisite international and Rwandan fusion cuisine in an elegant setting.',
      image: '/images/noir.jpg',
      images: ['/images/noir.jpg', '/images/poivre2.jpg', '/images/poivre1.jpg'],
      rating: 4.8,
      bestTime: 'Dinner (6:00-10:00 PM)',
      highlights: ['Fine Dining', 'Fusion Cuisine', 'Wine Selection', 'Romantic Atmosphere'],
      icon: Utensils,
      detailedDescription: 'Poivre Noir stands as one of Kigali\'s premier fine dining destinations, offering an exceptional culinary experience that masterfully blends international techniques with local Rwandan flavors. The restaurant\'s elegant interior features sophisticated décor, ambient lighting, and intimate seating arrangements that create the perfect atmosphere for romantic dinners or important business meetings. The menu showcases the chef\'s creativity and expertise, with each dish thoughtfully composed using the finest local and imported ingredients. Signature dishes highlight Rwanda\'s excellent produce, from fresh lake fish to locally-raised meats and organic vegetables. The extensive wine list features carefully selected bottles from around the world, with expert sommeliers on hand to recommend perfect pairings. The attentive and professional service team ensures every detail of the dining experience is flawless. The restaurant also offers private dining rooms for special occasions and hosts regular chef\'s table events where guests can interact with the culinary team.',
      address: 'Kiyovu, Kigali',
      priceRange: '20,000 - 40,000 RWF per person'
    },
    {
      id: 8,
      name: 'Inka Steakhouse & Bar',
      category: 'restaurant',
      description: 'Authentic Rwandan restaurant offering traditional dishes in a cozy, culturally-rich environment.',
      image: '/images/inka.jpg',
      images: ['/images/inka.jpg', '/images/inka.jpg', '/images/inka.jpg'],
      rating: 4.7,
      bestTime: 'Lunch & Dinner',
      highlights: ['Traditional Rwandan Food', 'Cultural Ambiance', 'Live Music', 'Local Experience'],
      icon: Utensils,
      detailedDescription: 'Inka Steakhouse & Bar provides an authentic taste of Rwanda through its carefully crafted menu and warm, culturally-rich atmosphere. This beloved local establishment celebrates Rwandan culinary traditions while offering a modern twist on classic dishes. The restaurant\'s interior is adorned with traditional Rwandan artwork, handwoven baskets, and cultural artifacts that tell the story of Rwanda\'s heritage. The menu features beloved local dishes such as isombe (cassava leaves), ibihaza (pumpkin), and perfectly grilled meats prepared with traditional spices. The restaurant is also known for its excellent selection of steaks, sourced from local farms and grilled to perfection. On weekend evenings, the restaurant comes alive with traditional Intore dance performances and live music, creating an immersive cultural experience. The bar offers a selection of local beers, including popular brands like Primus and Mutzig, as well as cocktails made with local ingredients. The friendly staff is knowledgeable about the dishes and happy to explain the cultural significance of different foods.',
      address: 'Remera, Kigali',
      priceRange: '10,000 - 25,000 RWF'
    },
    {
      id: 9,
      name: 'Green Park Gahanga',
      category: 'park',
      description: 'Beautiful community park with green spaces, playgrounds, and recreational facilities. Great for families and outdoor activities.',
      image: '/images/gahanga.jpg',
      images: ['/images/gahanga.jpg', '/images/greenpark1.jpg', '/images/greenpark.jpg'],
      rating: 4.5,
      bestTime: 'Weekends & Afternoons',
      highlights: ['Family-Friendly', 'Playgrounds', 'Picnic Areas', 'Sports Facilities'],
      icon: TreePine,
      detailedDescription: 'Green Park Gahanga is a vibrant community space designed to bring families and nature lovers together. This expansive park features well-maintained lawns, colorful gardens, and tree-lined pathways that create a welcoming environment for visitors of all ages. The park\'s modern playground equipment provides safe and engaging play areas for children, with separate zones designed for different age groups. Sports enthusiasts can enjoy the basketball courts, volleyball areas, and open spaces perfect for soccer or frisbee. The park\'s infrastructure includes clean restroom facilities, drinking fountains, and covered picnic pavilions equipped with tables and benches. On weekends, the park hosts community events, outdoor fitness classes, and cultural celebrations that bring the neighborhood together. The thoughtfully designed landscaping includes native plants and flowers that attract butterflies and birds, creating educational opportunities for young visitors to learn about local ecology. Walking paths wind through the park, offering pleasant routes for exercise or leisurely strolls. The park\'s security and regular maintenance ensure a safe, clean environment for all visitors.',
      address: 'Gahanga, Kicukiro, Kigali',
      priceRange: 'Free entry'
    },
    {
      id: 10,
      name: 'Kacyiru Park',
      category: 'park',
      description: 'Urban park in the heart of Kacyiru district offering green spaces, walking paths, and a peaceful escape from city life.',
      image: '/images/download (9).jpg',
      images: ['/images/download (9).jpg', '/images/download (9).jpg', '/images/download (9).jpg'],
      rating: 4.3,
      bestTime: 'Anytime',
      highlights: ['Urban Oasis', 'Walking Paths', 'Green Spaces', 'City Views'],
      icon: TreePine,
      detailedDescription: 'Kacyiru Park serves as a vital green lung in one of Kigali\'s busiest districts, providing residents and visitors with a tranquil escape from the urban hustle. This well-designed urban park features mature trees that offer shade and create a cool, refreshing atmosphere even during the warmest hours. The network of paved walking paths makes the park accessible to everyone, including parents with strollers and individuals with mobility devices. Strategically placed benches along the paths provide rest spots where visitors can sit, read, or simply observe the park\'s daily life. The park\'s elevation offers pleasant views of the surrounding Kacyiru district and distant hills, making it a popular spot for photography. Local office workers often visit during lunch breaks, seeking a peaceful moment among the greenery. The park\'s central location makes it easily accessible via public transportation, and its proximity to government offices and businesses ensures steady foot traffic. Regular maintenance keeps the grounds clean and attractive, while security personnel ensure visitor safety throughout the day.',
      address: 'Kacyiru, Gasabo, Kigali',
      priceRange: 'Free entry'
    },
    {
      id: 11,
      name: 'Ivuka Art',
      category: 'art',
      description: 'Contemporary art gallery and studio showcasing Rwanda\'s vibrant art scene with rotating exhibitions and artist workshops.',
      image: '/images/ivuka.jpg',
      images: ['/images/ivuka.jpg', '/images/azizi1.jpg', '/images/ivuka.jpg'],
      rating: 4.6,
      bestTime: 'Tuesday-Sunday',
      highlights: ['Contemporary Art', 'Local Artists', 'Exhibitions', 'Art Workshops'],
      icon: Palette,
      detailedDescription: 'Ivuka Art stands at the forefront of Rwanda\'s contemporary art movement, serving as both a gallery and creative hub for local and international artists. This dynamic space showcases diverse artistic expressions, from vibrant paintings and sculptures to mixed media installations and photography. The gallery hosts rotating exhibitions that feature emerging and established Rwandan artists, providing them with a platform to share their vision and connect with art collectors and enthusiasts. Regular artist talks and opening receptions create opportunities for meaningful dialogue about art, culture, and society. Beyond exhibition space, Ivuka operates as an active studio where artists work on their projects, allowing visitors to observe the creative process firsthand. The center offers various workshops and classes for aspiring artists of all skill levels, covering techniques in painting, drawing, sculpture, and printmaking. These hands-on sessions are led by experienced artists who share their knowledge and encourage creative exploration. The gallery shop features original artworks and prints available for purchase, making it easy to take home a piece of Rwanda\'s artistic heritage.',
      address: 'Kacyiru, Kigali',
      priceRange: 'Gallery entry free, workshops vary'
    },
    {
      id: 12,
      name: 'Soy Restaurant & Lounge',
      category: 'restaurant',
      description: 'Soy Restaurant & Lounge offers delicious Asian cuisine, stylish ambiance, refreshing drinks, and a relaxing space for friends and family to gather and enjoy.',
      image: '/images/soyares.jpg',
      images: ['/images/soyares.jpg', '/images/poivre.jpg', '/images/poivre1.jpg'],
      rating: 4.6,
      bestTime: 'Lunch & Dinner',
      highlights: ['Delicious Asian dishes', 'Friendly service', 'Perfect for dining & hangouts'],
      icon: Utensils,
      detailedDescription: 'Soy Restaurant & Lounge brings the flavors of Asia to the heart of Kigali, offering an extensive menu of authentic Asian dishes prepared by skilled chefs with expertise in various regional cuisines. The restaurant\'s modern, stylish interior creates a sophisticated yet welcoming atmosphere, with carefully chosen décor that reflects Asian aesthetic principles while maintaining a contemporary edge. The menu spans multiple Asian culinary traditions, featuring favorites from Chinese, Thai, Japanese, and Vietnamese cuisines. Signature dishes include perfectly executed sushi rolls, aromatic Thai curries, flavorful Chinese stir-fries, and Vietnamese pho. The lounge area provides a more casual setting where guests can enjoy creative cocktails, Asian-inspired mocktails, and a selection of premium teas. The bar features unique Asian spirits and imported sake for those seeking an authentic beverage experience. The restaurant\'s layout includes comfortable booth seating for intimate gatherings, larger tables for family dinners, and a private dining area for special occasions. Friendly, attentive staff members are knowledgeable about the menu and happy to accommodate dietary preferences or restrictions.',
      address: 'Kimihurura, Kigali',
      priceRange: '12,000 - 30,000 RWF'
    },
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? places 
    : places.filter(place => place.category === activeCategory);

  // Auto-slide effect for modal
  React.useEffect(() => {
    if (selectedPlace) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedPlace.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [selectedPlace]);

  const openModal = (place: Place) => {
    setSelectedPlace(place);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPlace(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedPlace) {
      setCurrentImageIndex((prev) => 
        prev === selectedPlace.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPlace) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPlace.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Simple Hero Section with brightness filter */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/Rwanda123.jpg"
            alt="Kigali City Panorama"
            fill
            priority
            className="object-cover brightness-[0.3]"
            quality={100}
          />
        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From hidden viewpoints to cultural landmarks, explore the best spots that make Kigali unique
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Curated Selection</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Explore Amazing Places
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hidden viewpoints to cultural landmarks, discover the best spots that make Kigali unique
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
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => {
              const Icon = place.icon;
              return (
                <div
                  key={place.id}
                  onMouseEnter={() => setHoveredCard(place.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredCard === place.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Icon className="w-4 h-4" />
                      <span className="capitalize">{place.category}</span>
                    </div>
                    {/* Rating */}
                    {place.rating && (
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{place.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {place.name}
                    </h3>
                    
                    {place.bestTime && (
                      <div className="flex items-center space-x-2 text-green-600 text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{place.bestTime}</span>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {place.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {place.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => openModal(place)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <MapPin className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No places found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-green-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Need Help Planning Your Visit?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and insider tips from local experts to make the most of your Kigali experience
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact a Local Guide
            </button>
          </div>
        </div>
      </section>

      {/* Modal - Similar to Rwanda Page */}
      {selectedPlace && (
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
                    {selectedPlace.images.map((image: string, index: number) => (
                      <div key={index} className="min-w-full h-full relative">
                        <Image
                          src={image}
                          alt={`${selectedPlace.name} ${index + 1}`}
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
                    {selectedPlace.images.map((_: string, index: number) => (
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
                      {selectedPlace.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="font-medium text-sm sm:text-base">{selectedPlace.bestTime}</span>
                      </div>
                      {selectedPlace.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-bold text-gray-900">{selectedPlace.rating}</span>
                        </div>
                      )}
                    </div>
                    {selectedPlace.priceRange && (
                      <div className="mt-2 text-green-700 font-semibold text-lg">
                        {selectedPlace.priceRange}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        About This Place
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedPlace.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedPlace.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedPlace.address && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                          Location
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="text-sm sm:text-base">{selectedPlace.address}</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 sm:pt-6 pb-2 sm:pb-4 sticky bottom-0 bg-white border-t border-gray-200">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-md font-semibold transition-colors uppercase tracking-wide text-sm sm:text-base">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacesToVisit;