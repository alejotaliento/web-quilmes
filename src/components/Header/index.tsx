import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import { dataImages } from "../../data";

import styles from "./index.module.scss";

export const Header = () => {
   return (
      <>
         <Box as="header" className={styles.root}>
            <Flex alignItems={"center"} h={16} justifyContent={"space-between"} margin={4}>
               <Image
                  alt="Segun Adebayo"
                  className={styles.logo}
                  src={dataImages.logoHeader}
                  width={90}
               />
            </Flex>
         </Box>
      </>
   );
};
