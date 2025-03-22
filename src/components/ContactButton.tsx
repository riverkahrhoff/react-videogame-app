import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Button size="lg">
      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        Contact us
      </Link>
    </Button>
  );
};

export default ContactButton;
