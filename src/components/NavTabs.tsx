import { Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdHome, MdInfo } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

const NavTabs = () => {
  const tabOptions = [
    { value: "home", name: "Home", icon: MdHome, path: "/" },
    { value: "about", name: "About Us", icon: MdInfo, path: "/about" },
    { value: "gallery", name: "Photos", icon: IoMdPhotos, path: "/gallery" },
  ];

  return (
    <Tabs.Root defaultValue="home" variant="subtle" paddingTop={2} size="lg">
      <Tabs.List>
        {tabOptions.map((options) => (
          <Tabs.Trigger value={options.value} key={options.value} asChild>
            <Link
              to={options.path}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <options.icon />
              {options.name}
            </Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default NavTabs;
