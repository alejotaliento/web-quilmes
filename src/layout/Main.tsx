import React from "react";

import { Header, Footer } from "../components";

// import styles from "./Main.module.scss";

const Main: React.FC = ({ children }) => {
   return (
      <>
         <Header />
         <div>{children}</div>
         <Footer />
      </>
   );
};

export default Main;
