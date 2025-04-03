import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      paddingTop={100}
      paddingBottom="5rem"
    >
      <VStack align="center" justify="center" gap={2}>
        <Heading fontSize="30px">Contact Us</Heading>
        <Text paddingTop={2}>We'll get back to you soon!</Text>
        <ContactForm />
      </VStack>
    </Flex>
  );
};

export default Contact;
