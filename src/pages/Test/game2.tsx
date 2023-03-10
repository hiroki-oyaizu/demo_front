import { Box, height, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Typography } from "@mui/material";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { Header } from "../../components/atomic/Header";
import { SideBar } from "../../components/atomic/SideBar";

export const Test = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Box style={{ display: "flex" }}>
        <Box
          style={{
            height: "100vh",
            display: "flex",
            textAlign: "center",
            lineHeight: "120px",
            width: "15%",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <SideBar />
        </Box>
        {/* /////////////////////////////////////////// */}
        <Box
          style={{
            height: "100vh",
            backgroundColor: "#EEEEEE",
            display: "flex",
            width: "85%",
            justifyContent: "space-between",
            lineHeight: "120px",
          }}
        >
          <Box
            style={{
              marginLeft: "100px",
              marginTop: "70px",
              width: "100%",
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: "20px",
                  fontWeight: "bold",
                  marginRight: "700px",
                }}
                sx={{ fontSize: 28 }}
              >
                TEST AGILE???????????????!
              </Typography>
              <Box
                sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab
                    style={{ fontSize: "20px" }}
                    value="one"
                    label="????????????"
                    wrapped
                  />
                  <Tab
                    style={{ fontSize: "20px" }}
                    value="two"
                    label="?????????????????????"
                  />
                </Tabs>
              </Box>
              <Typography variant="h6" gutterBottom>
                ???????????????????????????
                ??????????????????????????????????????????????????????????????????????????????
              </Typography>
            </Stack>
            {/* //////////////////////// */}
            <Box
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack spacing={3}>
                <Box
                  style={{
                    width: "77vw",
                    backgroundColor: "white",
                    display: "flex",
                    height: "110px",
                    alignItems: "center",
                    justifyContent: "normal",
                    borderRadius: 20,
                  }}
                >
                  <ApartmentIcon
                    sx={{ fontSize: 60 }}
                    style={{ marginLeft: "30px" }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginLeft: "30px" }}
                  >
                    ???????????????????????????????????????????????????
                  </Typography>
                  <HelpIcon
                    style={{ marginLeft: "20px", marginBottom: "10px" }}
                  />
                  <Button
                    variant="contained"
                    style={{ marginLeft: "600px", width: "180px" }}
                  >
                    ?????????
                  </Button>
                </Box>
                <Box
                  style={{
                    width: "77vw",
                    backgroundColor: "white",
                    display: "flex",
                    height: "110px",
                    alignItems: "center",
                    justifyContent: "normal",
                    borderRadius: 20,
                  }}
                >
                  <PersonIcon
                    sx={{ fontSize: 60 }}
                    style={{ marginLeft: "30px" }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginLeft: "30px" }}
                  >
                    ??????????????????
                  </Typography>
                  <HelpIcon
                    style={{ marginLeft: "20px", marginBottom: "10px" }}
                  />
                  <Button
                    variant="contained"
                    style={{ marginLeft: "820px", width: "180px" }}
                  >
                    ?????????
                  </Button>
                </Box>
                <Box
                  style={{
                    width: "77vw",
                    backgroundColor: "white",
                    display: "flex",
                    height: "110px",
                    alignItems: "center",
                    justifyContent: "normal",
                    borderRadius: 20,
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{ fontSize: 60 }}
                    style={{ marginLeft: "30px" }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginLeft: "30px" }}
                  >
                    ??????????????????
                  </Typography>
                  <HelpIcon
                    style={{ marginLeft: "20px", marginBottom: "10px" }}
                  />
                  <Button
                    variant="contained"
                    style={{ marginLeft: "820px", width: "180px" }}
                  >
                    ?????????
                  </Button>
                </Box>
                <Box
                  style={{
                    width: "77vw",
                    backgroundColor: "white",
                    display: "flex",
                    height: "110px",
                    alignItems: "center",
                    justifyContent: "normal",
                    borderRadius: 20,
                  }}
                >
                  <SettingsRoundedIcon
                    sx={{ fontSize: 60 }}
                    style={{ marginLeft: "30px" }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginLeft: "30px" }}
                  >
                    ????????????
                  </Typography>
                  <HelpIcon
                    style={{ marginLeft: "20px", marginBottom: "10px" }}
                  />
                  <Button
                    variant="contained"
                    style={{ marginLeft: "860px", width: "180px" }}
                  >
                    ?????????
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
