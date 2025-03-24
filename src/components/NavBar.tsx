import {
  Box,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/complete-optical-logo-cropped.png";
import ColorModeSwitch from "./ColorModeSwitch";
import NavTabs from "./NavTabs";
import NavDrawer from "./NavDrawer";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showLargeScreen = useBreakpointValue({ base: false, lg: true });
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(0, 0, 0, 0.7)"
      }
      color={colorMode === "light" ? "black" : "white"}
      textAlign="center"
    >
      <HStack padding="10px" justifyContent="space-between" wrap="wrap">
        <HStack>
          <Image src={logo} height="50px" fit="cover" />
          <Heading fontSize="30px" fontWeight="thin">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Complete Optical Lab
            </Link>
          </Heading>
          {showLargeScreen && <NavTabs />}
        </HStack>
        <HStack>
          {showLargeScreen && <ColorModeSwitch />}{" "}
          {!showLargeScreen && <NavDrawer />}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
