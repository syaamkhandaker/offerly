// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black", // Set default background color to black
        color: "white", // Set default text color to white
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc", // Add custom brand colors if needed
      900: "#1a202c",
    },
  },
});

export default customTheme;
