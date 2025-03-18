import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {showAside && (
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      )}

      <GridItem area="main" bg="dodgerBlue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
