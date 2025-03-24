import { Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const tabOptions = [
    // { value: "home", name: "HOME", path: "/" },
    { value: "about", name: "ABOUT", path: "/about" },
    { value: "gallery", name: "PHOTOS", path: "/gallery" },
    { value: "contact", name: "CONTACT", path: "/contact" },
  ];

  return (
    <Tabs.Root defaultValue="home" variant="plain" paddingTop={2} size="lg">
      <Tabs.List>
        {tabOptions.map((options) => (
          <Tabs.Trigger
            fontSize={15}
            value={options.value}
            key={options.value}
            asChild
            _focus={{ outline: "1px solid blue", outlineOffset: "2px" }}
          >
            <Link to={options.path}>{options.name}</Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default NavTabs;
