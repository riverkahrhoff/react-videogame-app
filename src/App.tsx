import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageRoutes from "./PageRoutes";

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <NavBar />
        <Box flex="1">
          <PageRoutes />
        </Box>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
