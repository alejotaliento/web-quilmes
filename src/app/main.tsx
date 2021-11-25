import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

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
