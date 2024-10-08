
import Pic1 from '../assets/simienl.jpg'
import Pic2 from '../assets/p-1.jpg'
import Pic3 from '../assets/Axum.jpg'
import Pic7 from '../assets/Gorgora.png'
import Pic4 from '../assets/addis1.jpg'
import Pic6 from '../assets/wenchi.jpg'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-ethiopia-hero"
      style={{backgroundImage: `url(${Pic4})` }}>
        
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 animate-slideInFromBottom"
        
        >
          Explore Ethiopia
        </h1>
        <p className="text-lg md:text-2xl text-black max-w-lg text-center mb-8 animate-slideInFromLeft">
          Discover Ethiopia’s rich cultural heritage and breathtaking landscapes...
        </p>
        <Link to='/about'>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-300 animate-bounce">
            Learn More
          </button>
          </Link>
        
      </div>

      {/* Attractions Section */}
      <div className="py-16 px-8 md:px-16 text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12 animate-slideInFromLeft">
          Most-Visited Destinations in Ethiopia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform rotate-15 transition-transform">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic1} 
                alt="Simien Mountains" 
                className="w-full h-64 object-cover  duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Simien Mountains</h3>
              <p className="text-black text-lg">
                Known for their rugged terrain, the Simien Mountains offer dramatic views and are home to unique wildlife species.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromLeft">
            <div className="relative">
              <img 
                src={Pic2}
                alt="Lalibela" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Lalibela</h3>
              <p className="text-black">
                The rock-hewn churches of Lalibela, a UNESCO World Heritage site, are a spiritual marvel and a testament to Ethiopia’s Christian heritage.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic3}
                alt="Axum obelisk" 
                className="w-full h-64 object-cover  transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Axum Obelisk</h3>
              <p className="text-black">
              Axum is an ancient city in northern Ethiopia, renowned as the heart of the powerful Axumite Empire and a UNESCO World Heritage site. It is famous for its towering obelisks, 
              ancient churches, and as the legendary resting place of the Ark of the Covenant        </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-8 md:px-16 text-black">
        <h2 className="text-3xl md:text-4xl font-bold  mb-12 animate-slideInFromLeft">
          Recent Inaugurated Parks 
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform rotate-15 transition-transform">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic4} 
                alt="Simien Mountains" 
                className="w-full h-64 object-cover  duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Friendship Park</h3>
              <p className="text-black text-lg">
              Friendship Park, located in the heart of Addis Ababa,It features tranquil gardens, fountains, and walking paths, making it a perfect spot for relaxation and cultural events              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromLeft">
            <div className="relative">
              <img 
                src={Pic6}
                alt="Lalibela" 
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Wenchi</h3>
              <p className="text-black text-lg">
              Wenchi is a stunning crater lake located southwest of Addis Ababa, offering breathtaking views, serene boat rides, and lush greenery              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden animate-slideInFromBottom">
            <div className="relative">
              <img 
                src={Pic7}
                alt="Blue Nile Falls" 
                className="w-full h-64 object-cover  transition-transform duration-500 ease-in-out hover:rotate-0" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Gorgora </h3>
              <p className="text-black text-lg">
              Gorgora is a picturesque town on the northern shore of Lake Tana, known for its historical significance and beautiful lakeside views.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
