import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreLIst from "./components/GenreLIst";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genres } from "./hooks/useGenres";
import { Platforms } from "./hooks/usePlatforms";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<string>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "270px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreLIst
            selectedGenre={selectedGenre}
            onSelect={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
          </Box>

          <SortSelector
            sortOrder={sortOrder}
            onSelectOrder={(order) => setSortOrder(order)}
          />
        </Flex>

        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          sortOrder={sortOrder}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
