import { useEffect } from "react";
import { Allgenre } from "../../components/genre/AllGenre";
import { useGenre } from "../../hooks/genre/useGenre";

export const GenreIndex = () => {
  const { Allgenle, fetchAllGenre } = useGenre();

  useEffect(() => {
    fetchAllGenre();
  }, []);
  return (
    <>
      <Allgenre Allgenle={Allgenle} />
    </>
  );
};
