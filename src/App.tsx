import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "Aside Main"`,
      }}
    >
      <GridItem area={"nav"} bg={"orange"}>
        Nav
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
