import { Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const tabOptions = [
    { value: "home", name: "Home", path: "/" },
    { value: "services", name: "Our Services", path: "/services" },
    { value: "about", name: "About Us", path: "/about" },
    { value: "gallery", name: "Photo Gallery", path: "/gallery" },
    { value: "contact", name: "Contact Us", path: "/contact" },
  ];

  return (
    <Tabs.Root defaultValue="home" variant="plain" paddingTop={2} size="lg">
      <Tabs.List gap={4}>
        {tabOptions.map((option) => (
          <Tabs.Trigger
            fontSize="md"
            fontWeight="medium"
            value={option.value}
            key={option.value}
            asChild
            _hover={{ color: "blue.500" }}
            _focus={{ outline: "none", color: "blue.500" }}
            _selected={{ color: "blue.500", borderBottom: "2px solid" }}
          >
            <Link to={option.path}>{option.name}</Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default NavTabs;
