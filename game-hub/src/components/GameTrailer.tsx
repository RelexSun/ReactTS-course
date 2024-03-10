import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  // if u dont wanna use optional chaining (?)
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;

  // if u dont wanna use optional chaining (?)
  // if (!first) return null;
};

export default GameTrailer;
