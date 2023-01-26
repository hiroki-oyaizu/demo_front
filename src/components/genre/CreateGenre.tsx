import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@chakra-ui/react";
import { TaxSelect } from "../../suport/taxSelect";
import { GenreType } from "../../types/genre/GenreType";

type Props = {
  createGenre: (params: GenreType) => void;
};
export const AllGenre: FC<Props> = (props: Props) => {
  const { createGenre } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      genres_title: "",
      tax_type: 0,
      buy_day: 2023 - 1 - 15,
    },
  });

  const genreStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  };

  const submitGenre = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Box style={genreStyle}>
        <Stack spacing={8}>
          <Typography variant="h3">家計簿アプリ</Typography>
          <Box>
            <Typography variant="h5">カテゴリー</Typography>
            <Controller
              control={control}
              name="genres_title"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box>
            <Typography variant="h5">税抜、税込</Typography>
            <Controller
              control={control}
              name="tax_type"
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem disabled={true} key={0} value={0}>
                    選択して下さい
                  </MenuItem>

                  {TaxSelect.map((tax) => (
                    <MenuItem key={tax.id} value={tax.id}>
                      {tax.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Box>
          <Box>
            <Typography variant="h5">カテゴリー</Typography>
            <Controller
              control={control}
              name="buy_day"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box>
            <Button onClick={handleSubmit(createGenre)}>登録</Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
