import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#0078D4",
    },
    secondary: {
      main: "#202223",
      light: "#F6F6F7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
