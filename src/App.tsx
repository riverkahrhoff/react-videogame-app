import { Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageRoutes from "./PageRoutes";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />

        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
