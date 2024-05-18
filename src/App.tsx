import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "Aside Main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"Aside"} bg={"blue"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"Main"} bg={"pink"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
