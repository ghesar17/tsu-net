import { createTheme } from "@mui/material";

export const themeSettings = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#625B5B",
      dark: "#171515",
      light: "#3D3434",
      neutral: "#242020",
      hover: "#282020",
    },
    secondary: {
      // blue
      main: "#4074DC",
    },
    background: {
      default: "#171515",
    },
    typography: {
      fontFamily: "Helvetica",
    },
  },
});

export default themeSettings;
