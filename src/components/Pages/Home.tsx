import { Box, Flex, Grid, Heading, Text, Button, Icon } from "@chakra-ui/react";
import {
  MdScience,
  MdPrecisionManufacturing,
  MdSupportAgent,
} from "react-icons/md";
import GalleryCarousel from "../GalleryCarousel";
import TextContainer from "../TextContainer";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Box
    p={6}
    borderRadius="lg"
    boxShadow="md"
    bg="white"
    _dark={{ bg: "gray.700" }}
    transition="all 0.3s"
    _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
  >
    <Icon as={icon} w={8} h={8} mb={3} color="blue.500" />
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text color="gray.600" _dark={{ color: "gray.300" }}>
      {description}
    </Text>
  </Box>
);

const Home = () => {
  const features = [
    {
      icon: MdScience,
      title: "Cutting-Edge Technology",
      description:
        "State-of-the-art equipment and processes for precise optical manufacturing",
    },
    {
      icon: MdPrecisionManufacturing,
      title: "Custom Solutions",
      description:
        "Specialized lens manufacturing tailored to your specific requirements",
    },
    {
      icon: MdSupportAgent,
      title: "Expert Support",
      description:
        "Dedicated team of optical professionals to assist with your needs",
    },
  ];

  return (
    <Box>
      <GalleryCarousel />

      <Box py={8} px={6}>
        <Heading textAlign="center" mb={3} size="xl">
          Welcome to Complete Optical Lab
        </Heading>
        <Text
          textAlign="center"
          fontSize="lg"
          mb={8}
          maxW="800px"
          mx="auto"
          color="gray.600"
          _dark={{ color: "gray.300" }}
        >
          We are a leading provider of precision optical manufacturing services,
          combining decades of expertise with innovative technology to deliver
          superior quality lenses and optical solutions.
        </Text>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          maxW="1200px"
          mx="auto"
          mb={10}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Grid>

        <Box maxW="800px" mx="auto" textAlign="center">
          <Heading size="lg" mb={3}>
            Our Expertise
          </Heading>
          <Text mb={4} color="gray.600" _dark={{ color: "gray.300" }}>
            With over two decades of experience in optical manufacturing, we
            specialize in creating precision lenses and optical components for
            various industries including medical, industrial, and research
            applications.
          </Text>
          <Link to="/services">
            <Button colorScheme="blue" size="lg">
              Explore Our Services
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
