import { useEffect } from "react";
import { AnimalList } from "../../components/animal/AnimalList";
import { useAnimal } from "../../hooks/animal/useAnimal";

export const AnimalIndex = () => {
  const { animals, fetchAnimal } = useAnimal();

  useEffect(() => {
    fetchAnimal();
  }, []);
  return (
    <>
      <AnimalList animals={animals} />
    </>
  );
};
