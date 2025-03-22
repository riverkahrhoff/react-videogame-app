import { Button, CloseButton, Drawer, Portal, VStack } from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";

const NavDrawer = () => {
  const drawerOptions = ["About Us", "Photo Gallery", "Contact Form"];

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="md">
          <MdOutlineMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Header>
              <Drawer.Title>Complete Optical</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>This is where something about the lab will go</p>
              <VStack gap={4} paddingTop={3}>
                {drawerOptions.map((option) => (
                  <Button variant="outline" key={option}>
                    {option}
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
