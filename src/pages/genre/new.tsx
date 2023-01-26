import { AllGenre } from "../../components/genre/CreateGenre";
import { useGenre } from "../../hooks/genre/useGenre";

export const GenreNew = () => {
  const { createGenre } = useGenre();
  return (
    <>
      <AllGenre createGenre={createGenre} />
    </>
  );
};
