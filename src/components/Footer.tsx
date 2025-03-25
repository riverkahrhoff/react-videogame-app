import { Box, Container, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const contactOptions = [
    {
      value: "email",
      text: "contact@example.com",
      icon: FaEnvelope,
      link: "mailto:contact@example.com",
    },
    {
      value: "phone",
      text: "(123) 456 - 7690",
      icon: FaPhone,
      link: "tel:+11234567690",
    },
    {
      value: "address",
      text: "123 Main St, City, Country",
      icon: FaMapMarkerAlt,
      link: "",
    },
  ];

  return (
    <Box
      as="footer"
      py={3}
      bottom={0}
      left={0}
      right={0}
      bg="rgba(0, 0, 0)"
      color="white"
      width="100%"
      zIndex={10}
    >
      <Container maxW="container.md">
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 1, md: 10 }}
          justify="center"
          align="center"
        >
          {contactOptions.map((option, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              fontSize={{ base: "sm", md: "md" }}
            >
              <Icon as={option.icon} color="white" />
              <Link href={option.link} color="white">
                <Text>{option.text}</Text>
              </Link>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
