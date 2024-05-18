import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "Aside Main"`,
      }}
    >
      {" "}
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"Aside"}></GridItem>
      </Show>
      <GridItem area={"Main"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
