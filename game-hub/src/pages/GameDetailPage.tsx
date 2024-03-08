import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner, Heading, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  // use slug! to tell ts that this will never be null
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
