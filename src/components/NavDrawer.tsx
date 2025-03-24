import { Button, CloseButton, Drawer, Portal, VStack } from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavDrawer = () => {
  const drawerOptions = [
    { value: "home", name: "Home", path: "/" },
    { value: "about", name: "About", path: "/about" },
    { value: "gallery", name: "Photos", path: "/gallery" },
    { value: "contact", name: "Contact", path: "/contact" },
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
            <Drawer.Header>
              <Drawer.Title>Complete Optical Lab</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is where something about the lab will go. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quis nemo natus
                consectetur cumque delectus minus vero harum, numquam quam sit
                eveniet voluptate nesciunt quaerat soluta a officiis libero
                mollitia odio.
              </p>
              <VStack gap={4} paddingTop={3}>
                {drawerOptions.map((option) => (
                  <Button variant="subtle" key={option.value}>
                    <Link to={option.path}>{option.name}</Link>
                  </Button>
                ))}
              </VStack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default NavDrawer;
