"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const KigaliEssentials: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Add custom animations in a style tag */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 0.9;
            transform: translateY(0);
          }
        }
        
        .animate-text-1 {
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        
        .animate-text-2 {
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        
        .animate-text-3 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        /* Scroll animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scroll-animate {
          opacity: 0;
        }

        .scroll-animate.animate-in.slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .scroll-animate.animate-in.slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .scroll-animate.animate-in.slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .scroll-animate.animate-in.scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        /* Stagger delays for grid items */
        .scroll-animate:nth-child(1) { animation-delay: 0s; }
        .scroll-animate:nth-child(2) { animation-delay: 0.1s; }
        .scroll-animate:nth-child(3) { animation-delay: 0.2s; }
        .scroll-animate:nth-child(4) { animation-delay: 0.3s; }
        .scroll-animate:nth-child(5) { animation-delay: 0.4s; }
        .scroll-animate:nth-child(6) { animation-delay: 0.5s; }
      `}</style>

      {/* Hero Section - keeping it the same */}
      <section id="kigali-essentials" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              minHeight: '100vh'
            }}
          >
             <source src="/videos/kigali123.webm" type="video/webm" />
           <source src="/videos/kigali123.mp4"  type="video/mp4" />
          </video>
          
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('')",
              filter: 'brightness(0.3)'
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            style={{ 
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Welcome to Kigali
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 leading-relaxed">
           The Heart of Africa, where tradition meets innovation, a peaceful and fast-growing city that offers rich culture, creativity, safety, and opportunity, making it a perfect place to live, visit, work, and build a bright future together 
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Discover Kigali Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Discover Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A city that captivates with its cleanliness, safety, and vibrant energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate slide-left">
              <Image
                src="/images/bg3.jpg"
                alt="Kigali Skyline"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6 scroll-animate slide-right">
              <h3 className="text-3xl font-bold text-gray-900">The City of a Thousand Hills</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nestled among rolling green hills, Kigali is a modern African capital that defies expectations. 
                Known as one of the cleanest cities in Africa, it's a place where innovation thrives and nature 
                flourishes in harmony with urban development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From bustling markets filled with colorful crafts to contemporary art galleries and world-class 
                restaurants, Kigali offers an authentic blend of traditional Rwandan culture and modern sophistication.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1M+</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">730km²</div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1,567m</div>
                  <div className="text-sm text-gray-600">Altitude</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              A Journey Through Time
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient kingdoms to a beacon of hope and resilience
            </p>
          </div>

          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6 scroll-animate slide-left">
                <h3 className="text-3xl font-bold text-gray-900">Ancient Roots</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Long before becoming the capital, the hills of Kigali were home to ancient settlements. 
                  The area was part of the Kingdom of Rwanda, a sophisticated monarchy with rich traditions 
                  in governance, poetry, and cattle herding.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The name "Kigali" is believed to come from Mount Kigali, one of the hills that characterize 
                  the city's dramatic topography.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate slide-right">
                <Image
                  src="/images/col1.jpg"
                  alt="Traditional Rwanda"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate slide-left">
                <Image
                  src="/images/col.jpg"
                  alt="Colonial Kigali"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 scroll-animate slide-right">
                <h3 className="text-3xl font-bold text-gray-900">Colonial Era & Independence</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 1907 during German colonial rule, Kigali became the capital of Rwanda in 1962 
                  following independence. The city began as a small administrative center and trading post.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Throughout the mid-20th century, Kigali gradually expanded, though it remained relatively 
                  small compared to other African capitals.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 md:p-12 scroll-animate scale-in">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Remembering & Rising</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In 1994, Rwanda faced one of the darkest chapters in human history with the genocide against 
                  the Tutsi. Kigali was deeply affected, and the Kigali Genocide Memorial stands today as a 
                  solemn reminder and place of reflection.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From these ashes, Rwanda and Kigali chose a path of reconciliation, unity, and remarkable 
                  transformation that continues to inspire the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Kigali Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Kigali Today
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A thriving hub of innovation, sustainability, and African excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 scroll-animate slide-up">
              <div className="relative h-64">
                <Image
                  src="/images/Kigali.jpg"
                  alt="Clean Kigali"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Clean & Green</h4>
                <p className="text-gray-700 leading-relaxed">
                  Africa's cleanest city with monthly community cleaning days (Umuganda), 
                  plastic bag bans, and a commitment to environmental sustainability.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 scroll-animate slide-up">
              <div className="relative h-64">
                <Image
                  src="/images/Kigali1.jpg"
                  alt="Tech Kigali"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Tourism & Conference Center</h4>
                <p className="text-gray-700 leading-relaxed">
                 A leading destination for international events, global meetings, cultural festivals, business forums, and world-class hospitality experiences A leading destination for international events, meetings, and cultural experiences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 scroll-animate slide-up">
              <div className="relative h-64">
                <Image
                  src="/images/walking.jpg"
                  alt="Safe Kigali"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Safe & Welcoming</h4>
                <p className="text-gray-700 leading-relaxed">
                  One of Africa's safest cities with warm, hospitable people. Walk freely day or night 
                  and experience genuine Rwandan hospitality.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-animate slide-left">
              <h3 className="text-3xl font-bold text-gray-900">A City Transformed</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today's Kigali is a testament to vision and determination. The city boasts modern infrastructure, 
                including the Kigali Convention Centre, a vibrant arts scene, world-class hotels, and a growing 
                culinary landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Economic Growth</h5>
                    <p className="text-gray-600">Fastest-growing economy in East Africa with business-friendly policies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Digital Infrastructure</h5>
                    <p className="text-gray-600">4G coverage citywide with ambitious plans for smart city development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Cultural Renaissance</h5>
                    <p className="text-gray-600">Thriving arts, music, and food scenes celebrating Rwandan culture</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate slide-right">
              <Image
                src="/images/kcc1.jpg"
                alt="Modern Kigali"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations WITH ANIMATED TEXT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Kigali  most breathtaking places and unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Volcanoes with Animation */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer row-span-2 scroll-animate scale-in">
              <div className="relative h-[500px]">
                <Image
                  src="/images/zaria.jpg"
                  alt="Zaria court"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
               
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Zaria Court, Kigali</span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
              Zaria Court, Kigali: Modern, secure, stylish apartments in prime location.
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Lake Kivu */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-animate scale-in">
              <div className="relative h-[240px]">
                <Image
                  src="/images/nyandugu.jpg"
                  alt="Lake Kivu"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium"> Nyandungu Eco Park</span>
                  </div>
                
                  <p className="text-sm text-gray-200">
                    Scenic nature park with trails, wildlife, and peaceful outdoor experiences
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Nyungwe */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-animate scale-in">
              <div className="relative h-[240px]">
                <Image
                  src="/images/retreat hote.jpg"
                  alt="Nyungwe Forest"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">The Retreat</span>
                  </div>
                
                  <p className="text-sm text-gray-200">
                 Luxury hotel providing comfort, elegance, and exceptional hospitality in serene surroundings
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Akagera */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-animate scale-in">
              <div className="relative h-[240px]">
                <Image
                  src="/images/ecopark.jpg"
                  alt="Akagera National Park"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Green Nyandungu</span>
                  </div>
                  <p className="text-sm text-gray-200">Lush eco-park perfect for nature walks and outdoor relaxation</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Downtown Kigali with Animation */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer row-span-2 scroll-animate scale-in">
              <div className="relative h-[500px]">
                <Image
                  src="/images/zaria1.jpg"
                  alt="Kigali City"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
             
                
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">The Zaria Suites</span>
                  </div>
                
                  <p className="text-sm text-gray-200 leading-relaxed">
                  Contemporary apartments with safety, comfort, and modern amenities  Modern architecture, vibrant markets, and museums
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Cultural Experiences with Animation */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-animate scale-in">
              <div className="relative h-[240px]">
                <Image
                  src="/images/bk.jpg"
                  alt="Cultural Experiences"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Animated Text Overlay - Smaller for regular card */}
              
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">BK Arena Kigali</span>
                  </div>
                 
                  <p className="text-sm text-gray-200">State-of-the-art arena for sports, music, and large-scale events</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900">4.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 scroll-animate slide-up">
            <Link 
              href="/places"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Place 
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800">
        <div className="max-w-4xl mx-auto text-center scroll-animate scale-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Experience Kigali?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Discover the places, activities, and accommodations that make Kigali unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/places"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Explore Places to Visit
            </Link>
            <Link 
              href="/accommodations"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Plan Your Stay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KigaliEssentials;