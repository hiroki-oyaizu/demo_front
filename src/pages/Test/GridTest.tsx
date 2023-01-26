import { Box, Typography, styled } from "@mui/material";
import { Header } from "../../components/atomic/Header";
import { SideBar } from "../../components/atomic/SideBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CustomGrid = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(8),
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(8),
  borderRadius: theme.spacing(5),
  height: theme.spacing(40),
  width: theme.spacing(40),
  backgroundColor: "green",
}));

export const GridTest = () => {
  return (
    <>
      <Header />
      <Box style={{ display: "flex" }}>
        <SideBar />
        <Box
          style={{ width: "90%", paddingTop: "30px", backgroundColor: "grey" }}
        >
          <Typography>拠点情報</Typography>
          <Box
            style={{
              width: "90%",
              height: "90%",
              backgroundColor: "white",
              margin: "40px auto 70px",
              borderRadius: "30px",
              display: "flex",
            }}
          >
            <Box style={{ width: "70%" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <CustomGrid></CustomGrid>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomGrid></CustomGrid>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomGrid></CustomGrid>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomGrid></CustomGrid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <hr />
            {/* 左・・・・・・・・・・・・・・・・・・・・・・・・・ */}
            <Box style={{ width: "10%" }}> 右</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
