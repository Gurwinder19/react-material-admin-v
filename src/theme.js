import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },

    secondary: {
      main: "#4c95dd",
    },

    success: {
      main: "#01b075",
    },

    error: {
      main: red.A400,
    },

    fontColor: {
      main: "#20304c",

    },

    inputBorderColor: {
      main: "#919191",
    },

    iconBorderColor: {
      main: "#d1d1d1",
    },


    gradient: {
      background: "radial-gradient(circle, rgba(238,174,202,0.6643032212885154) 0%, rgba(148,187,233,0.5998774509803921) 100%)",
    },

    glass: {
      main: "rgba(255,255,255,0.5)",
    },

    boxShadow:{
      boxShadow:"1px 1px 5px #888888",

    },

    


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
