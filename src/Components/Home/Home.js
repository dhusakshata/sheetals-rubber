
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct way to import Navigation
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from 'swiper'

import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";

import logo1 from "../../Images/client1.png"; 
import logo2 from "../../Images/client2.jpg";
import logo3 from "../../Images/client3.png";
import logo4 from "../../Images/client4.jpg";
import logo5 from "../../Images/client5.png";
import logo6 from "../../Images/client6.png";
import logo7 from "../../Images/client7.png";
// Import the video file
import rubberWorld from "../../video/about.mp4";
import ProductionNarrat from "../../video/production5.mp4";
 

import Silicon from "../../Images/Silicon.png"
import Turbocharger from "../../Images/Turbo-charger.png";
import Marine from "../../Images/Marine-wet.png";
import EPDM from "../../Images/EPDM-rubber.png";
import Organic from "../../Images/organic-rubber.png";
import Assembly from "../../Images/Assembly-rubber.png";
import Wired from "../../Images/wired-reinforced.png";
import FuelTube from "../../Images/Fuel-Tubes.png";
import Moulded from "../../Images/Moulded.png";


// Application Area Images
import Img1 from "../../Images/Image1.png";
import Img2 from "../../Images/image2.jpg";
import Img3 from "../../Images/Image3.jpg";
import Img4 from "../../Images/Image4.png";
import Img5 from "../../Images/Image5.jpg";
import Img6 from "../../Images/Image6.jpg";

function Home() {
  
 

  const buttons = [
    { label: "Vehicle", img: Img1 },
     { label: "Marine", img: Img2 },
     { label: "Automobile", img: Img3 },
     { label: "Construction", img: Img4 },
     { label: "Industrial", img: Img5 },
   { label: "Agriculture", img: Img6 },
   ];

  // // State to track the selected logo images 
   const [selectedImage, setSelectedImage] = useState(buttons[0].img);
   const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

   // for sliding product images
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products in one row
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
  autoplaySpeed: 1000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="home">
  <section className="video-container">
    <video className="production-video" src={ProductionNarrat} controls autoPlay muted loop></video>
  </section>

  <section className="about-us-container">
    <div className="about-us-title">
      <h1>ABOUT US</h1>
    </div>
    <div className="about-us-content">
      <div className="about-us-info">
      <p>
      For over two decades, Sheetal Rubber Products has been a trusted leader in the
manufacturing of high-quality rubber products with 50,000 sq. ft. of manufacturing
facility.
      </p>
      <p    
            >
      We specialize in manufacturing a full range of low-pressure hoses, including
      platinum silicone-lined, FMK-lined fuel cell hoses, flame-retardant hoses, and various
      moulded components.
      </p>
      <p  
            >
      Our commitment to product expertise, engineering excellence,
      rigorous testing, and strict quality controls has established us as a preferred partner for
      major manufacturers in India and a favored exporter internationally.
      </p>
   
      <ul
          >
          <li>Committed towards continual improvement, quality control and customer
          satisfaction.</li>
          <li>Believes in the concept of Total Quality Management.</li>
          <li>Fully fledged traceability system (Raw material to Finished goods).</li>
          <li> 
          All Raw Materials are tested, before being used, based on their Quality Policy.</li>
        </ul>


        <button className="read-more">
          <Link to="/about">Read More</Link>
        </button>
      </div>
      <div className="about-us-video">
  <video className="about-us-video-element" autoPlay muted loop>
    <source src={rubberWorld} type="video/mp4" />
  </video>
</div>

    </div>
  </section>

{/* Product Section */}
 <div className="our-products">
      <h1>OUR PRODUCTS</h1>
      <Slider {...settings}>
        <div className="product-cards">
          <Link to="/siliconpolyester">
            <img src={Silicon} alt="Silicon-Polyester Hoses" className="product-images" />
            <h3>Silicon-Polyester Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/turbochargerhose">
            <img src={Turbocharger} alt="Turbocharger & CAC Hoses" className="product-images" />
            <h3>Turbocharger & CAC Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/marinewethose">
            <img src={Marine} alt="Marine Wet Exhaust Hoses" className="product-images" />
            <h3>Marine Wet Exhaust Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/epdm">
            <img src={EPDM} alt="EPDM Rubber Hoses" className="product-images" />
            <h3>EPDM Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/organic">
            <img src={Organic} alt="Organic Rubber Hoses" className="product-images" />
            <h3>Organic Rubber Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/assembly">
            <img src={Assembly} alt="Assembly Hoses" className="product-images" />
            <h3>Assembly Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/wired">
            <img src={Wired} alt="Wire Reinforced Hoses" className="product-images" />
            <h3>Wire Reinforced Hoses</h3>
          </Link>
        </div>
        <div className="product-cards">
          <Link to="/fueltube">
            <img src={FuelTube} alt="Fuel Tubes" className="product-images" />
            <h3>Fuel Tubes</h3>
          </Link>
        </div>
        <div className="product-cards">
  <Link to="/moulded">
    <img src={Moulded} alt="Moulded Hoses" className="product-images" />
    <h3>Moulded Hoses</h3>
  </Link>
</div>

      </Slider>
    </div>

{/* Logo container */}
<div className="logo-container">
      <div className="logo-title"><h1>ESTEEMED CLIENTS</h1></div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={5}
        navigation={true}
        pagination={{ clickable: true }} // Enable pagination
       
        loop={true}

      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 
{/* 
Application Area */}

<div className="application-area">
  <div className="application-head">
    <h1>OUR OFFERINGS</h1>
  </div>
      
      <div className="button-container">
  {buttons.map((button, index) => (
    <button
      key={index}
      className={`app-button ${
        selectedImage === button.img ? "active" : ""
      }`}
      onClick={() => setSelectedImage(button.img)} // Update image on click
      onMouseEnter={() => setSelectedImage(button.img)} // Update image on hover
    >
      {button.label}
    </button>
  ))}
</div>
<div className="image-display">
  <img src={selectedImage} alt="Selected Application" />
</div>

</div>



    </div>
  );
}

export default Home;
