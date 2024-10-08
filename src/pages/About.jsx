import Pic4 from '../assets/addis1.jpg'
import icon1 from '../assets/icons1.png'
import icon2 from '../assets/icons2.png'
import icon3 from '../assets/icons3.png'
import { Link } from "react-router-dom"; // Import Link for navigation
import { HiArrowNarrowLeft } from "react-icons/hi"; 

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${Pic4 })` }}>
        <div className="absolute inset-0 bg-black opacity-50">
       
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <div className=' top-4 left-4 '>
            <Link to="/" className=''>
        <button className="bg-primary text-white flex  gap-2 px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300">
          <HiArrowNarrowLeft className="text-4xl" /> {/* Arrow icon */}
          
        </button>
      </Link>
            </div>
        
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideInFromBottom">About Us</h1>
          <p className="text-lg md:text-2xl animate-slideInFromLeft">We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage</p>
        </div>
      </div>

      
      
      <div className="py-12 px-8 md:px-16 ">
      
      <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-slideInFromLeft">
            Discover Ethiopia
          </h2>
          <p className="text-gray-700 text-lg text-center md:text-xl animate-fadeIn">
            At our Ethiopian tourism agency, we specialize in providing unforgettable experiences that showcase the country's stunning landscapes and rich cultural heritage. Ethiopia, known as the cradle of humanity, is home to ancient civilizations dating back thousands of years, including the Kingdom of Aksum and the historic roots of Christianity in Africa. From the majestic Simien Mountains to the remarkable rock-hewn churches of Lalibela, we offer curated tours that connect travelers with Ethiopia's diverse traditions and breathtaking beauty. Let us guide you through a journey that blends adventure, history, and authentic local experiences.
          </p>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-slideInFromLeft">Our Core Values</h2>
          <div className="flex flex-col md:flex-row justify-around gap-4">
            {/* Value 1 */}
            <div className="mb-8 md:mb-0">
              <div className="flex justify-center mb-4">
                <img src={icon1} alt="Integrity" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-black fs-12">We uphold the highest standards of integrity in all our actions.</p>
            </div>
            {/* Value 2 */}
            <div className="mb-8 md:mb-0">
              <div className="flex justify-center mb-4">
                <img src={icon2} alt="Excellence" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
              <p className="text-black">We strive for excellence in every aspect of our services.</p>
            </div>
          {/* Value 3 */}
             <div className="mb-8 md:mb-0">
           <div className="flex justify-center mb-4">
                <img src={icon3} alt="Adventure" className="w-16 h-16" />
          </div>
               <h3 className="text-2xl font-semibold mb-2">Adventure</h3>
             <p className="text-black">We believe in creating unforgettable adventures that connect travelers with the beauty of Ethiopia.</p>
             </div>
 
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default About;
