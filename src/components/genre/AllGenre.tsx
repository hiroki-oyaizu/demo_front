import { Box } from "@mui/material";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { GenreTypeIndex } from "../../types/genre/GenreType";

interface Props {
  Allgenle: GenreTypeIndex[];
}
export const Allgenre: FC<Props> = (props: Props) => {
  const { Allgenle } = props;
  const { id } = useParams<string>();
  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h3>家計簿登録</h3>
        {Allgenle.map((genle: GenreTypeIndex) => {
          return (
            <>
              <Link to={`/genres/${genle.id}`}>
                <h4>{genle.genres_title}</h4>
              </Link>
            </>
          );
        })}
      </Box>
    </>
  );
};
