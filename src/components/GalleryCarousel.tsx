import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import carouselImage from "../assets/tingfeng-xia-KxXdo-k1cjE-unsplash.jpg";
import { Image, Box } from "@chakra-ui/react";

export default function SimpleSlider() {
  const images = [carouselImage, carouselImage, carouselImage];

  var settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      width="100%"
      margin="0"
      padding="0"
    >
      <Box width="100%" maxWidth="100%">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              maxHeight="600px"
              width="100%"
              objectFit="cover"
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
