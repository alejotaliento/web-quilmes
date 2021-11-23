import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
   colors: {
      primary: theme.colors["blue"],
   },
   styles: {
      global: {
         body: {
            backgroundColor: "#000766",
         },
      },
      colors: {
         brand: {
            100: "#fff",
         },
      },
   },
});
