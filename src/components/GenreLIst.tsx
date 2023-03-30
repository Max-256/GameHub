import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelect: (genre: Genres) => void;
}

const GenreLIst = ({ onSelect }: Props) => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button onClick={() => onSelect(g)} variant="link" fontSize="lg">
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreLIst;
