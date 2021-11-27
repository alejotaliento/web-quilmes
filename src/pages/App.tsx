import React from "react";
import {
   Stack,
   Button,
   Text,
   VStack,
   useBreakpointValue,
   Box,
   useMediaQuery,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { Banner, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";

function App() {
   const [isLargerThan425] = useMediaQuery("(max-width: 425px)");

   return (
      <>
         <Box as="section" className={styles.principalSection} margin={0}>
            <Banner image="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg">
               <VStack
                  alignItems={isLargerThan425 ? "center" : "flex-start"}
                  bgGradient="linear(to-r, blackAlpha.600, transparent)"
                  className={styles.example}
                  justifyContent="center"
                  margin="0px !important"
                  padding="0px !important"
                  px={useBreakpointValue({ base: 4, md: 8 })}
                  w="full"
               >
                  <Stack align="flex-start" marginLeft="20px" maxW="2xl" spacing={4}>
                     <Text as="h1" className={styles.title}>
                        EL SABOR DEL <br /> ENCUENTRO
                     </Text>
                     <Text as="h2" className={styles.subtitle}>
                        Cerveza que te acompaña <br /> en todo momento.
                     </Text>

                     <Box alignSelf="flex-start" direction="row">
                        <Button
                           className={styles.buttonBanner}
                           margin="0px 0px 0px 50px !important"
                           rounded="full"
                        >
                           VER MÁS
                        </Button>
                     </Box>
                  </Stack>
               </VStack>

               <Box
                  alignSelf="flex-end"
                  justifySelf="center"
                  left="45 %"
                  position="absolute"
                  right="50%"
               >
                  <Button className={styles.rowButton} rounded="full">
                     <ArrowDownIcon h={5} w={5} />
                  </Button>
               </Box>

               <Box className={styles.endText}>
                  <Text as="h3">
                     Desde 1888 en las puertas de nuestras casas en Quilmes te acompañamos en todos
                     tus encuentros. Somos la cerveza argentina con 200 años de historia.
                  </Text>
               </Box>
            </Banner>
         </Box>

         <Box as="section">
            <SplitWithImage
               containerProps={{
                  bgColor: "#031532",
               }}
               image={
                  "https://image.freepik.com/foto-gratis/primer-plano-hombres-brindando-cerveza_171337-13664.jpg"
               }
               imageOrientation="right"
            >
               <VStack
                  align="flex-start"
                  justify="center"
                  maxW="2xl"
                  px={useBreakpointValue({ base: 4, md: 8 })}
                  spacing={4}
                  textAlign="center"
                  w="full"
               >
                  <Text as="h1" className={styles.title}>
                     PUNTOS DE ENCUENTRO
                  </Text>
                  <Text
                     alignSelf="center"
                     as="h2"
                     className={styles.subtitle}
                     fontSize={isLargerThan425 ? "15px" : "35px"}
                  >
                     Además de la Quilmes que tomás en tu casa queremos que disfrutes la que
                     servimos en la nuestra, llega directamente de la cervecería
                  </Text>
                  <Button alignSelf="center" className={styles.buttonBanner} rounded="full">
                     CONOCER
                  </Button>
               </VStack>
            </SplitWithImage>
         </Box>
      </>
   );
}

export default App;
