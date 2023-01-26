import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HelpIcon from "@mui/icons-material/Help";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
export const FormTest = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box
        style={{
          height: "90px",
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          lineHeight: "120px",
          // boxShadow: "10px 5px 5px",
          // border: "2px solid bluck",
          border: "2px solid grey",
        }}
      >
        <Button>
          <AcUnitIcon sx={{ fontSize: 38 }} />
        </Button>

        <Typography
          variant="h4"
          gutterBottom
          style={{ marginLeft: "-200px", marginTop: "30px" }}
        >
          TEST AGILE
        </Typography>
        <Typography variant="h4" gutterBottom style={{ marginTop: "30px" }}>
          Test株式会社
        </Typography>

        <Box>
          <AddAlertRoundedIcon sx={{ fontSize: 38 }} />
        </Box>
        <Box>
          <AccountCircleRoundedIcon sx={{ fontSize: 38 }} />
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom style={{ marginTop: "30px" }}>
            Test 太郎
          </Typography>
        </Box>
      </Box>
      {/* ///////////////////////////////////// */}
      <Box style={{ backgroundColor: "grey", height: "100vh" }}>
        <Box style={{ display: "flex", alignItems: "center" }} sx={{ pt: 4 }}>
          <ArrowBackIcon sx={{ fontSize: "50px" }} />
          <Typography variant="h4">従業員情報 新規登録</Typography>
          <HelpIcon />
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            height: "87%",
            width: "88%",
            borderRadius: "50px",
            margin: "10px auto",
          }}
        >
          <PersonAddAltIcon
            style={
              {
                // position: "relative",
                // top: "50px" /*追記*/,
                // left: "50px" /*追記*/,
                // color: "teal",
              }
            }
            sx={{ fontSize: "80px" }}
          />
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                height: "68vh",
                width: "60%",
              }}
              pt={4}
            >
              {/* 一段目のform */}
              <Stack spacing={4}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30} color="teal">
                    性（必須）
                  </Typography>
                  <TextField
                    label="あなたのお名前(性)"
                    variant="outlined"
                  ></TextField>
                  <Typography fontSize={30} color="teal">
                    名（必須）
                  </Typography>
                  <TextField
                    label="あなたのお名前(名)"
                    variant="outlined"
                  ></TextField>
                </Box>
                {/* 2段目のform */}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30} color="teal">
                    セイ（必須）
                  </Typography>
                  <TextField
                    label="あなたのお名前(セイ)"
                    variant="outlined"
                  ></TextField>
                  <Typography fontSize={30} color="teal">
                    メイ（必須）
                  </Typography>
                  <TextField
                    label="あなたのお名前(メイ)"
                    variant="outlined"
                  ></TextField>
                </Box>
                {/* 3段目のform */}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30} color="teal">
                    メールアドレス
                  </Typography>
                  <TextField
                    label="メールアドレス"
                    variant="outlined"
                    multiline
                    style={{ width: 500 }}
                  ></TextField>
                </Box>
                {/* 3段目のform end */}
                {/* 4段目のform */}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30} color="teal">
                    従業員ID（必須）
                  </Typography>
                  <TextField
                    label="従業員ID（必須）"
                    variant="outlined"
                    multiline
                    style={{ width: 500 }}
                  ></TextField>
                </Box>
                {/* 3段目のform end */}
                {/* 5段目のform */}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={25} color="teal">
                    社用電話番号（必須）
                  </Typography>
                  <TextField
                    label="従業員ID（必須）"
                    variant="outlined"
                    multiline
                    style={{ width: 500 }}
                  ></TextField>
                </Box>
                {/* 3段目のform end */}
                <Box
                  style={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <Typography fontSize={30} color="teal">
                    指定席
                  </Typography>
                  <Select
                    style={{ width: "100px", marginLeft: "100px" }}
                    value={"hello"}
                    key={"hello"}
                  ></Select>
                </Box>
                <Box
                  style={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <Checkbox {...label} defaultChecked />
                  <Typography fontSize={20} color="teal">
                    フルリモート勤務の場合はチェックしてください
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box
              style={{
                height: "68vh",
                width: "40%",
                marginTop: "-10px",
                marginLeft: "30px",
              }}
              p={-10}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <Typography
                  mx={{ fontSize: "30px" }}
                  color={"teal"}
                  style={{ whiteSpace: "nowrap" }}
                >
                  拠点名（必須）
                </Typography>
                <Select
                  id="outlined-basic"
                  label="選択してください"
                  variant="outlined"
                  defaultValue={"?????"}
                  style={{ width: "200px", marginLeft: "50px" }}
                >
                  <MenuItem value={10}>選択してください</MenuItem>
                </Select>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <Typography
                  mx={{ fontSize: "30px" }}
                  color={"teal"}
                  style={{ whiteSpace: "nowrap" }}
                >
                  部署名（必須）
                </Typography>
                <Select
                  id="outlined-basic"
                  label="選択してください"
                  variant="outlined"
                  defaultValue={"?????"}
                  style={{ width: "200px", marginLeft: "50px" }}
                >
                  <MenuItem value={10}>選択してください</MenuItem>
                </Select>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <Typography
                  mx={{ fontSize: "30px" }}
                  color={"teal"}
                  style={{ whiteSpace: "nowrap" }}
                >
                  フロア名（必須）
                </Typography>
                <Select
                  id="outlined-basic"
                  label="選択してください"
                  variant="outlined"
                  defaultValue={"?????"}
                  style={{ width: "200px", marginLeft: "50px" }}
                >
                  <MenuItem value={10}>選択してください</MenuItem>
                </Select>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "40px",
                  alignItems: "center",
                }}
              >
                <Typography
                  mx={{ fontSize: "30px" }}
                  color={"teal"}
                  style={{ whiteSpace: "nowrap" }}
                >
                  権限（必須）
                </Typography>
                <Select
                  id="outlined-basic"
                  label="選択してください"
                  variant="outlined"
                  defaultValue={"?????"}
                  style={{ width: "200px", marginLeft: "50px" }}
                >
                  <MenuItem value={10}>選択してください</MenuItem>
                </Select>
              </Box>
              <Box
                style={{
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <Typography fontSize={30} color="teal">
                  備考
                </Typography>
              </Box>
              <Box
                style={{
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <TextField
                  label="最大文字数1000文字"
                  variant="outlined"
                  multiline
                  minRows="6"
                  style={{ width: 500 }}
                ></TextField>
              </Box>
              <Box
                style={{
                  alignItems: "center",
                  margin: "auto",
                  width: "100vw",
                  marginTop: "20px",
                  marginRight: "30px",
                }}
              >
                <Stack direction="row" spacing={4}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "white",
                      color: "teal",
                      width: "200px",
                      marginLeft: "-390px",
                    }}
                    size="medium"
                  >
                    戻る
                  </Button>

                  <Button
                    size="large"
                    variant="contained"
                    color="success"
                    style={{
                      width: "200px",
                    }}
                  >
                    登録
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
