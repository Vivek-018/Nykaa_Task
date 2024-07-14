import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const CarouselItem = ({ brand, title, description, imageUrl }) => (
  <div className="px-2 ">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 sm:h-80 md:h-96 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black">
        <h3 className="text-xl text-white font-bold">{brand}</h3>
        <p className="text-sm text-white">{title}</p>
        <p className="text-xs text-gray-300">{description}</p>
        <button className="mt-2  bg-white text-pink-500 px-4 py-2 rounded-full text-sm transition duration-300 font-semibold">
          Shop Now -
        </button>
      </div>
    </div>
  </div>
);

const Carousel = () => {
  const items = [
    {
      brand: "Quench",
      title: "94% Users Found Brighter Skin",
      description: "Explore the Korean Range!",
      imageUrl:
       "/images/img1.avif",
    },
    {
      brand: "Kay",
      title: "Kay's Top picks",
      description: "Upto 20% Off",
      imageUrl:
        "/images/img2.avif",
    },
    {
      brand: "OLAPLEX",
      title: "DRAMATIC SHINE THE DROP!",
      description: "Bestseller Mini On Weightless Styling Oil",
      imageUrl:
        "/images/img3.avif",
    },
    {
      brand: "Brand 4",
      title: "Product 4",
      description: "Description 4",
      imageUrl:
        "/images/img4.avif",
    },
    {
      brand: "Brand 5",
      title: "Product 5",
      description: "Description 5",
      imageUrl:
        "/images/img5.avif",
    },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-0 h-full">
      <Slider {...settings}>
        {items.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

