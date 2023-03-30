import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreLIst from "./components/GenreLIst";
import NavBar from "./components/NavBar";
import { Genres } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
