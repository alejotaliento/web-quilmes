import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../../theme";
import App from "../pages/App";
import Main from "../layout/Main";

import "../styles/index.css";

ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <Main>
            <App />
         </Main>
      </ChakraProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
