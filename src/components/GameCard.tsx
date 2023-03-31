import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <Text>Game Rating: </Text>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2l">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
