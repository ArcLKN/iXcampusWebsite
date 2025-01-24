import { extendTheme } from "@chakra-ui/react";

// Create a custom theme with Montserrat
const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif", // Apply to headings
    body: "'Montserrat', sans-serif", // Apply to body text
  },
});

export default theme;
