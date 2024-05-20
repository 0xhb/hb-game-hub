import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "Aside Main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {" "}
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"Aside"} paddingX="20px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"Main"}>
        <Flex paddingLeft={2} marginBottom={3}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectePlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
