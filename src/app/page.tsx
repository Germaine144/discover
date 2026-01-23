import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const KigaliEssentials: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Video Background */}
      <section id="kigali-essentials" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
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
           <source src="/videos/kigsli123.mp4"  type="video/mp4" />
          </video>
          
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('')",
              filter: 'brightness(0.3)'
            }}
          />
        </div>

        {/* Hero Content */}
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

        {/* Scroll Indicator */}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Discover Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A city that captivates with its cleanliness, safety, and vibrant energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bg3.jpg"
                alt="Kigali Skyline"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              A Journey Through Time
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient kingdoms to a beacon of hope and resilience
            </p>
          </div>

          <div className="space-y-20">
            {/* Ancient Era */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
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
              <div className="order-1 md:order-2 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/col1.jpg"
                  alt="Traditional Rwanda"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Colonial Period */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/col.jpg"
                  alt="Colonial Kigali"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
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

            {/* 1994 Genocide */}
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Kigali Today
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A thriving hub of innovation, sustainability, and African excellence
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Clean & Green */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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

            {/* Tech Hub */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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

            {/* Safe & Welcoming */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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

          {/* Modern Highlights */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
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