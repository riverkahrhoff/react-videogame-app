import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <VStack>
      <Heading fontSize="30px" paddingTop={5}>
        Contact Us
      </Heading>
      <Text paddingTop={2}>We'll get back to you soon!</Text>
      <ContactForm />
    </VStack>
  );
};

export default Contact;
