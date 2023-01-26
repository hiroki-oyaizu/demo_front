import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
export const SideBar = () => {
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          textAlign: "center",
          lineHeight: "120px",
          width: "10%",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        <Stack spacing={-8}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>ホーム</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DomainRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>拠点管理</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <PersonAddAltRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>従業員管理</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <PersonAddAltRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>組織管理</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <PersonAddAltRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>ウェルネスサーベイ</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LeaderboardRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>レポート</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <SettingsRoundedIcon sx={{ fontSize: 38 }} />
            <h4 style={{ marginTop: "-100px" }}>設定</h4>
          </Link>
        </Stack>
      </Box>
    </>
  );
};
