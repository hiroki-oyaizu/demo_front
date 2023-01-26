import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Prefecture, prefectureList } from "../../suport/prefecture";
import { Controller, useForm } from "react-hook-form";
import { purchaseValue } from "../../suport/purchasetType";
import { TaxValue } from "../../suport/tax";
import { pink } from "@mui/material/colors";
import { DeriveryTime } from "../../suport/derivery_time";
import { values } from "cypress/types/lodash";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export const PurchaseNew: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // 料金
  // 都道府県
  // お届け時間
  // 利用種類
  // 税抜税込
  const defaultPurchase = {
    price: 0,
    prefecture_id: 0,
    delivery_time: 0,
    purchase_type: 0,
    price_type: 0,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: defaultPurchase.price,
      prefecture_id: defaultPurchase.prefecture_id,
      delivery_time: defaultPurchase.delivery_time,
      purchase_type: defaultPurchase.purchase_type,
      price_type: defaultPurchase.price_type,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post(
        `http://localhost:3010/api/v1/posts/${id}/purchases`,
        data
      );
      navigate("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h1>購入ページ</h1>
        <Typography>料金</Typography>
        <Controller
          control={control}
          name="price"
          render={({ field }) => <TextField {...field} />}
        />
        <Typography>都道府県</Typography>
        <Controller
          control={control}
          name="prefecture_id"
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: "250px" }}
              error={!!errors.prefecture_id}
              id="prefecture_id"
              name="prefecture_id"
              variant="outlined"
              margin="dense"
              label="都道府県 *"
              labelId="都道府県 *"
            >
              <MenuItem disabled={true} key={0} value={0}>
                都道府県を選択してください
              </MenuItem>
              {prefectureList.map((prefecture) => (
                <MenuItem key={prefecture.id} value={prefecture.id}>
                  {prefecture.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Typography>利用種類</Typography>
        <Controller
          control={control}
          name="purchase_type"
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: "250px" }}
              error={!!errors.purchase_type}
              id=" purchase_type"
              name=" purchase_type"
              variant="outlined"
              margin="dense"
              label="都道府県 *"
              labelId="都道府県 *"
            >
              <MenuItem disabled={true} key={0} value={0}>
                選択してください
              </MenuItem>
              {purchaseValue.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.value}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Typography>お届け時間</Typography>
        <Controller
          control={control}
          name="delivery_time"
          render={({ field }) => (
            <>
              <Select
                {...field}
                error={!!errors.delivery_time}
                id=" delivery_time"
                name=" delivery_time"
                variant="outlined"
                margin="dense"
                label="税込、税抜 *"
              >
                <MenuItem>選択してください</MenuItem>
                {DeriveryTime.map((derivery) => (
                  <MenuItem key={derivery.id} value={derivery.id}>
                    {derivery.name}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
        />
        <Typography>税込、税抜</Typography>
        <Controller
          control={control}
          name="price_type"
          render={({ field }) => (
            <>
              <Select
                {...field}
                error={!!errors.price_type}
                id=" price_type"
                name=" price_type"
                variant="outlined"
                margin="dense"
                label="税込、税抜 *"
                labelId="税込、税抜 *"
              >
                <MenuItem>選んでください</MenuItem>
                {TaxValue.map((value) => (
                  <MenuItem key={value.id} value={value.id}>
                    {value.name}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
        />

        <Box>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            送信
          </Button>
        </Box>
      </Box>
    </>
  );
};
