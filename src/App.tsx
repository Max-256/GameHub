import { Grid, GridItem, Show } from "@chakra-ui/react";
import GamesGrid from "./components/GamesGrid";
import GenreLIst from "./components/GenreLIst";
import NavBar from "./components/NavBar";

const App = () => {
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
      <Show above="lg">
        <GridItem area="aside">
          <GenreLIst />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
