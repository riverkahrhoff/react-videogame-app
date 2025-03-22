import { Box, Container, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const contactOptions = [
    {
      value: "email",
      text: "contact@example.con",
      icon: FaEnvelope,
      link: "contact@example.com",
    },
    { value: "phone", text: "(123) 456 - 7690", icon: FaPhone, link: "" },
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
      py={4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="gray.800"
      color="white"
    >
      <Container maxW="container.lg">
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={5}
          justify="space-between"
        >
          <Box>
            {contactOptions.map((option, index) => (
              <Stack key={index} gap={2}>
                <Stack direction="row" align="center">
                  <Icon as={option.icon} />
                  <Link href={option.link} color="white">
                    <Text color="white">{option.text}</Text>
                  </Link>
                </Stack>
              </Stack>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
