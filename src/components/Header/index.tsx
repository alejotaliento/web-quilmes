import React from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

import { dataImages } from "../../data";

import styles from "./index.module.scss";

export const Header = () => {
   return (
      <>
         <Box as="header" className={styles.root}>
            <Image
               alt="Segun Adebayo"
               className={styles.logo}
               src={dataImages.logoQuilmes}
               width={90}
            />
            <Stack alignItems={"center"} direction="row" h={16} margin={4} spacing="24px">
               <Text>Inicio</Text>
               <Text>Nosotros</Text>
               <Text>Sabores</Text>
               <Text>Lugares</Text>
               <Text>Contacto</Text>
            </Stack>
         </Box>
      </>
   );
};
