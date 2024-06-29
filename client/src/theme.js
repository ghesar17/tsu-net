import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    dark: {
      primaryDark: "#171515",
      primaryLight: "#3D3434",
      hover: "#282020",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

export default theme;
