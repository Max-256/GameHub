import { SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platforms | null;
  sortOrder: string;
  searchText: string;
}

const GamesGrid = ({
  selectedGenre,
  selectedPlatform,
  sortOrder,
  searchText,
}: Props) => {
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    sortOrder,
    searchText
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        padding={3}
        spacing={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
