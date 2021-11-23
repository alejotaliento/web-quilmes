import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

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
