import { Box, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { GenreTypeIndex } from "../../types/genre/GenreType";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PriceType } from "../../types/genre/price/PriceType";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
interface Props {
  genle: GenreTypeIndex | undefined;
  submitPrice: (params: PriceType) => void;
}
export const DetailGenre: FC<Props> = (props) => {
  const { genle, submitPrice } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PriceType>({
    defaultValues: {
      price: 0,
      note: "",
      purchase_day: "",
    },
  });
  const { id } = useParams<{ id: string | undefined }>();
  const checkName = (genleId: string) => {
    switch (genleId) {
      case "1":
        return "食費";
        break;
      case "2":
        return "外食費";
        break;
      case "3":
        return "交際費";
        break;
      case "4":
        return "趣味";
        break;
      case "5":
        return "生活費";
        break;
      default:
        return "?????";
    }
  };

  return (
    <>
      <Box
        style={{
          textAlign: "center",
          lineHeight: "100px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <Typography variant="h4">{checkName(id!)}</Typography>
        <Typography variant="h6">金額</Typography>
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Typography variant="h6">備考</Typography>
        <Controller
          control={control}
          name="note"
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              {...field}
              label="Outlined"
              variant="outlined"
            />
          )}
        />
        <Typography variant="h6">購入日</Typography>
        <Controller
          control={control}
          name="purchase_day"
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Box>
          <Button onClick={handleSubmit(submitPrice)}>登録</Button>
        </Box>
      </Box>
    </>
  );
};
