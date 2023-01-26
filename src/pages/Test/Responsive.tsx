import { Box } from "@mui/material";
import "./ResT2.css";
import "./ResT.css";
import "./styles.css";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const Responsive = () => {
  const matches: boolean = useMediaQuery("(min-width:1077px)");
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1025,
        xl: 1536,
      },
    },
  });

  return (
    <>
      <Box className="Test">aaaa</Box>
      {matches ? <h1>確認</h1> : null}
      <Box
        sx={{
          display: { sm: "block", md: "none" },
        }}
      >
        hellloo
      </Box>
    </>
  );
};
