import { Button, Card, Center } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: ReactNode;
  path: string;
  label: string;
}

const TextContainer = ({ title, children, path, label }: Props) => {
  return (
    <Center>
      <Card.Root width="80%" marginBottom={20} variant="elevated">
        <Card.Body gap="2">
          <Card.Title mt="2">{title}</Card.Title>
          <Card.Description>{children}</Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button>
            <Link to={path}>{label}</Link>
          </Button>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
};

export default TextContainer;
