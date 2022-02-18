import { extendTheme } from "@chakra-ui/react";
import color from "../utils/color";

export default extendTheme({
  breakpoints: {
    sm: "100px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  colors: {
    modes: {
      light: {
        background: "#f0f8ff",
        backgroundShade: "gray.200",
        colorToggle: "#f00",
      },
      dark: {
        background: "#1A202C",
        backgroundShade: "#333",
        colorToggle: "#0f0",
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "'baloo 2', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: color("background", props),
      },
    }),
  },
});