import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PriceType } from "../../types/genre/price/PriceType";

export const useFamilyTree = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const submitPrice = async (params: PriceType) => {
    await axios.post<PriceType>(
      `http://localhost:3010/api/v1/genres/${id}/family_trees`,
      params
    );
    navigate("/genres_index");
  };

  return { submitPrice };
};
