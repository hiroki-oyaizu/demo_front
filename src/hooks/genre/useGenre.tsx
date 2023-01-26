import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GenreType, GenreTypeIndex } from "../../types/genre/GenreType";

export const useGenre = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [genle, setGenle] = useState<GenreTypeIndex>();
  const [Allgenle, setAllgenle] = useState<GenreTypeIndex[]>([]);

  const fetchAllGenre = async () => {
    try {
      const res = await axios.get<GenreTypeIndex[]>(
        "http://localhost:3010/api/v1/genres"
      );
      if (res.status === 200 && res.data) {
        setAllgenle(res.data);
      }
    } catch (e: any) {
      return { e };
    }
  };

  const createGenre = async (params: GenreType) => {
    try {
      await axios.post<GenreType>(
        "http://localhost:3010/api/v1/genres",
        params
      );
      navigate("/");
    } catch (e: any) {
      return { e };
    }
  };

  const fetchDetailGenre = async () => {
    try {
      const res = await axios.get<GenreTypeIndex>(
        `http://localhost:3010/api/v1/genres/${id}`
      );
      if (res.status === 200 && res.data) {
        setGenle(res.data);
      }
    } catch (e: any) {
      return { e };
    }
  };

  return { createGenre, Allgenle, fetchAllGenre, fetchDetailGenre, genle };
};
