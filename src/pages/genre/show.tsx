import { useEffect } from "react";
import { DetailGenre } from "../../components/genre/DetailGenre";
import { useGenre } from "../../hooks/genre/useGenre";
import { useFamilyTree } from "../../hooks/price/useFamilyTree";

export const GenreShow = () => {
  const { fetchDetailGenre, genle } = useGenre();
  const { submitPrice } = useFamilyTree();
  useEffect(() => {
    fetchDetailGenre();
  }, []);
  return (
    <>
      <DetailGenre genle={genle} submitPrice={submitPrice} />
    </>
  );
};
