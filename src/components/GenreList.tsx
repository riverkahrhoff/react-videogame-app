import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} paddingLeft={2}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="ghost"
              paddingX={2}
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
