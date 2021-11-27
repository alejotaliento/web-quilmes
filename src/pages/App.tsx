import React from "react";
import { Stack, Button, Text, VStack, useBreakpointValue, Box } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { Banner, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";

function App() {
   return (
      <>
         <Box as="section" className={styles.principalSection}>
            <Banner image="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg">
               <VStack
                  alignItems="flex-start"
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
                           margin="5px 5px 5px 50px"
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
                  left="50%"
                  position="absolute"
                  right="50%"
               >
                  <Button className={styles.rowButton} rounded="full">
                     <ArrowDownIcon Fw={5} h={5} />
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
                  bgColor: "blue",
               }}
               image={
                  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
               }
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
                     Lorem ipsum dolor sit amet
                  </Text>
                  <Text as="h2" className={styles.subtitle}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
