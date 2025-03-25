import { Box, Button, Card, Center } from "@chakra-ui/react";
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
    <Center width="100%" paddingX={4}>
      <Box width="100%" maxWidth="90vw">
        <Card.Root width="100%" variant="elevated">
          <Card.Body>
            <Card.Title mt="2">{title}</Card.Title>
            <Card.Description>{children}</Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button>
              <Link to={path}>{label}</Link>
            </Button>
          </Card.Footer>
        </Card.Root>
      </Box>
    </Center>
  );
};

export default TextContainer;
