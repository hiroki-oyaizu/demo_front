import { Box, Button, Typography } from "@mui/material";
import { Header } from "../../components/atomic/Header";
import { SideBar } from "../../components/atomic/SideBar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const ShowBranch = () => {
  return (
    <>
      <Header />
      <Box style={{ display: "flex" }}>
        <SideBar />
        {/* 大枠 */}
        <Box style={{ width: "100vw", height: "100vh" }}>
          <Box
            style={{
              display: "flex",
              marginTop: "20px",
              marginLeft: "30px",
              alignItems: "center",
            }}
          >
            <ArrowCircleLeftIcon sx={{ fontSize: "60px" }} />
            <Typography variant="h4" style={{ marginLeft: "30px" }}>
              拠点情報本社
            </Typography>
          </Box>
          {/* 大枠 */}
          <Box
            pt={8}
            style={{
              display: "flex",
              backgroundColor: "white",
              border: "2px solid red",
              height: "70vh",
              width: "85vw",
              margin: "auto",
              marginTop: "20px",
              borderRadius: "20px",
            }}
          >
            {/* 左枠start */}
            <Box style={{ width: "35%", height: "70vh", textAlign: "center" }}>
              <Box
                style={{
                  display: "flex",
                  width: "30vw",
                  marginLeft: "50px",
                  alignItems: "center",
                  marginTop: "-30px",
                }}
              >
                <Typography variant="h4" style={{ marginRight: "100px" }}>
                  拠点詳細
                </Typography>
                <BorderColorIcon
                  style={{ fontSize: "40px", marginLeft: "200px" }}
                />
              </Box>
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">拠点名称</Typography>
                <Typography variant="h6" style={{ marginRight: "70px" }}>
                  東京本社
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">〒</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  154-8504
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">住所</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  東京都世田谷区赤堤１－１
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">席数</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  200席
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">自由席</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  40席
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">会議室数</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  18席
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">拠点責任者</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  田中太郎
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">ワーカー数</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  297名
                </Typography>
              </Box>
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">分割方式</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  フロア
                </Typography>
              </Box>
              {/* 1つのブロックend */}
              {/* 1つのブロック */}
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
              >
                <Typography variant="h5">フロア数</Typography>
                <Typography variant="h6" style={{ marginRight: "60px" }}>
                  4
                </Typography>
              </Box>
              {/* 1つのブロックend */}
            </Box>
            <hr style={{ marginLeft: "40px" }} />
            {/* 右枠start */}
            <Box style={{ width: "65%", height: "70vh" }}>
              <Box style={{ marginTop: "-30px", marginLeft: "30px" }}>
                <Typography variant="h4">フロア情報一覧</Typography>
              </Box>
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography variant="h6" style={{ width: "90px" }}></Typography>
                <Typography variant="h6">フロア名</Typography>
                <Typography variant="h6">
                  利用可能
                  <br />
                  席数
                </Typography>
                <Typography variant="h6">制限出社率</Typography>
                <Typography variant="h6">
                  最大利用
                  <br />
                  可能席数
                </Typography>
                <Typography variant="h6">レイアウト</Typography>
                <Typography variant="h6">QRコード</Typography>
                <Typography variant="h6" style={{ width: "90px" }}></Typography>
              </Box>
              <Box
                style={{
                  borderBottom: "1px solid gray",
                  width: "880px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              ></Box>
              <Box
                style={{
                  marginLeft: "20px",
                  marginTop: "50px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography variant="h6">6F</Typography>
                <Typography variant="h6">○○フロア</Typography>
                <Typography variant="h6">40</Typography>
                <Typography variant="h6">50%</Typography>
                <Typography variant="h6">0</Typography>
                <Typography variant="h6">
                  <Button>席情報</Button>
                </Typography>
                <Typography variant="h6">
                  <Button>発行</Button>
                </Typography>
                <Typography variant="h6">
                  {" "}
                  <ArrowCircleLeftIcon sx={{ fontSize: "30px" }} />
                </Typography>
              </Box>
              <Box
                style={{
                  borderBottom: "1px solid gray",
                  width: "880px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              ></Box>
              <Box></Box>
            </Box>
            {/* 右枠ラスト */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
