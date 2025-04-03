import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  VStack,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";

const NavDrawer = () => {
  const drawerOptions = [
    { value: "home", name: "Home", path: "/" },
    { value: "services", name: "Our Services", path: "/services" },
    { value: "about", name: "About Us", path: "/about" },
    { value: "gallery", name: "Photo Gallery", path: "/gallery" },
    { value: "contact", name: "Contact Us", path: "/contact" },
  ];

  return (
    <Drawer.Root placement="start">
      <Drawer.Trigger asChild>
        <Button variant="subtle" size="md" rounded="full">
          <MdOutlineMenu />
          MENU
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Header borderBottomWidth="1px" pb={4}>
              <Drawer.Title fontSize="xl" fontWeight="bold">
                Complete Optical Lab
              </Drawer.Title>
              <Text fontSize="sm" color="gray.600">
                Excellence in Optical Manufacturing
              </Text>
            </Drawer.Header>
            <Drawer.Body>
              <Box mb={6} borderBottomWidth="1px" pb={4}>
                <Text fontSize="sm" lineHeight="1.6">
                  Complete Optical Lab is a state-of-the-art facility
                  specializing in precision optical manufacturing and custom
                  lens solutions. With over two decades of experience, we
                  combine cutting-edge technology with expert craftsmanship.
                </Text>
              </Box>
              <Drawer.Context>
                {(store) => (
                  <VStack gap={3} align="stretch">
                    {drawerOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant="ghost"
                        justifyContent="flex-start"
                        height="40px"
                        onClick={() => store.setOpen(false)}
                      >
                        <Link to={option.path}>{option.name}</Link>
                      </Button>
                    ))}
                  </VStack>
                )}
              </Drawer.Context>
            </Drawer.Body>
            <Drawer.Footer borderTopWidth="1px" pt={4}>
              <Flex justify="space-between" align="center" width="100%">
                <Text fontSize="sm">© 2024 Complete Optical Lab</Text>
                <ColorModeButton />
              </Flex>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild position="absolute" top={4} right={4}>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default NavDrawer;
