import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const About = () => {
  const certifications = [
    "ISO 9001:2015 Certified",
    "FDA Registered Facility",
    "CE Mark Compliance",
    "GMP Standards",
  ];

  const expertise = [
    "Precision Lens Manufacturing",
    "Custom Optical Solutions",
    "Quality Control & Testing",
    "Research & Development",
    "Optical Design Consultation",
    "Prototype Development",
  ];

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Flex direction="column" gap={8}>
          {/* Hero Section */}
          <Box textAlign="center" mb={6}>
            <Heading size="2xl" mb={3}>
              About Complete Optical Lab
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              _dark={{ color: "gray.300" }}
              maxW="800px"
              mx="auto"
            >
              Your trusted partner in precision optical manufacturing since 2000
            </Text>
          </Box>

          {/* Mission Statement */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            <Box>
              <Heading size="lg" mb={3}>
                Our Mission
              </Heading>
              <Text
                color="gray.600"
                _dark={{ color: "gray.300" }}
                fontSize="lg"
              >
                At Complete Optical Lab, we are dedicated to advancing optical
                technology through precision manufacturing and innovative
                solutions. Our mission is to provide the highest quality optical
                components while maintaining exceptional customer service and
                technical expertise.
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/lab-facility.jpg"
                alt="Our state-of-the-art facility"
                borderRadius="lg"
                objectFit="cover"
                height="100%"
                width="100%"
              />
            </Box>
          </Grid>

          {/* Expertise Section */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
            <Box>
              <Heading size="lg" mb={4}>
                Our Expertise
              </Heading>
              <Flex direction="column" gap={2}>
                {expertise.map((item, index) => (
                  <Flex key={index} align="center">
                    <Icon
                      as={MdCheckCircle}
                      color="green.500"
                      mr={2}
                      boxSize={5}
                    />
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
            <Box>
              <Heading size="lg" mb={3}>
                Quality Assurance
              </Heading>
              <Text color="gray.600" _dark={{ color: "gray.300" }} mb={4}>
                We maintain the highest standards of quality through rigorous
                testing and certification processes. Our facility is equipped
                with state-of-the-art measurement and inspection equipment.
              </Text>
              <Flex direction="column" gap={2}>
                {certifications.map((cert, index) => (
                  <Flex key={index} align="center">
                    <Icon
                      as={MdCheckCircle}
                      color="green.500"
                      mr={2}
                      boxSize={5}
                    />
                    <Text>{cert}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Grid>

          {/* Company Values */}
          <Box pt={4}>
            <Heading size="lg" mb={6} textAlign="center">
              Our Values
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              <Box
                p={5}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.700" }}
              >
                <Heading size="md" mb={2}>
                  Innovation
                </Heading>
                <Text>
                  Continuously pushing the boundaries of optical manufacturing
                  technology
                </Text>
              </Box>
              <Box
                p={5}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.700" }}
              >
                <Heading size="md" mb={2}>
                  Precision
                </Heading>
                <Text>
                  Maintaining the highest standards of accuracy in every
                  component we produce
                </Text>
              </Box>
              <Box
                p={5}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.700" }}
              >
                <Heading size="md" mb={2}>
                  Partnership
                </Heading>
                <Text>
                  Building long-term relationships through exceptional service
                  and support
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
