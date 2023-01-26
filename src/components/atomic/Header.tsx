import { Box, Button, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
export const Header = () => {
  return (
    <>
      <Box
        style={{
          height: "100px",
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
    </>
  );
};
