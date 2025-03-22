import { Heading, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from "../assets/complete-optical-logo-cropped.png";
import ColorModeSwitch from "./ColorModeSwitch";
import NavTabs from "./NavTabs";
import ContactButton from "./ContactButton";
import NavDrawer from "./NavDrawer";

const NavBar = () => {
  const showLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack
      padding="10px"
      justifyContent="space-between"
      wrap="wrap"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <HStack>
        <Image src={logo} height="50px" borderRadius="full" fit="cover" />
        <Heading fontSize="30px">Complete Optical Lab</Heading>
        {showLargeScreen && <NavTabs />}
        {!showLargeScreen && <NavDrawer />}
      </HStack>
      <HStack>
        <ContactButton />
        {showLargeScreen && <ColorModeSwitch />}
      </HStack>
    </HStack>
  );
};

export default NavBar;
