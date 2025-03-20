import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let bgColor =
    score > 75 ? "green.500" : score > 60 ? "yellow.500" : "red.500";
  let textColor = "white";

  if (!score) return null;

  return (
    <Badge
      bgColor={bgColor}
      color={textColor}
      fontSize="14px"
      px={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
