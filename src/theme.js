import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },

    secondary: {
      main: "#dc004e",
    },

    error: {
      main: red.A400,
    },

    background: {
      default: "#fff",
    },

    inputBorderColor: {
      main: "#919191",
    },

    iconBorderColor: {
      main: "#d1d1d1",
    },

    blackColor: {
      main: "#000",
    }

  },
  overrides: {
    // Style sheet name ⚛️
    IconButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white",
      },
      size: {},
    },
  },
});

export default theme;
