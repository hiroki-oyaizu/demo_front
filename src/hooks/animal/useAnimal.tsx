import axios from "axios";
import { useState } from "react";
import { AnimalType } from "../../types/animal/AnimalType";

const initalAnimal: AnimalType = {
  id: 0,
  name: "",
  age: 0,
  animal_type: 0,
};
export const useAnimal = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([initalAnimal]);

  const fetchAnimal = async () => {
    try {
      const res = await axios.get<AnimalType[]>(
        "http://localhost:3010/api/v1/animals"
      );
      if (res.status === 200 && res.data) {
        setAnimals(res.data);
      }
    } catch (e: any) {
      return { e };
    }
  };

  return { animals, fetchAnimal };
};
