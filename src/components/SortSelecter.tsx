import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelecter = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Relevance">Relevance</Menu.Item>
            <Menu.Item value="Date-Added">Date Added</Menu.Item>
            <Menu.Item value="Name">Name</Menu.Item>
            <Menu.Item value="Release-Date">Release Date</Menu.Item>
            <Menu.Item value="Popularity">Popularity</Menu.Item>
            <Menu.Item value="Average-Rating">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelecter;
