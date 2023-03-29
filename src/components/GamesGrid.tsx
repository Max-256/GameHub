import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        padding={3}
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
