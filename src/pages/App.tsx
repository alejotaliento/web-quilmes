import React from "react";
import { Stack, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

import { Banner, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";

function App() {
   return (
      <>
         <Banner image="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg">
            <VStack
               bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
               justify={"center"}
               px={useBreakpointValue({ base: 4, md: 8 })}
               w={"full"}
            >
               <Stack align={"flex-start"} maxW={"2xl"} spacing={6}>
                  <Text
                     as="h1"
                     color="white"
                     fontSize={useBreakpointValue({ base: "45px", md: "60px" })}
                     fontWeight={700}
                     lineHeight={1.2}
                  >
                     EL SABOR DEL <br /> ENCUENTRO
                  </Text>
                  <Text as="h2" color="white" fontSize={25}>
                     Cerveza que te acompaña <br /> en todo momento.
                  </Text>

                  <Stack alignSelf="flex-start" direction={"row"}>
                     <Button className={styles.buttonBanner} rounded={"full"}>
                        VER MÁS
                     </Button>
                  </Stack>
               </Stack>
            </VStack>
            <Text
               alignSelf="flex-end"
               as="h3"
               color="white"
               fontSize={20}
               margin={4}
               textAlign="center"
               width="70%"
            >
               Desde 1888 en las puertas de nuestras casas en Quilmes te acompañamos en todos tus
               encuentros. Somos la cerveza argentina con 200 años de historia.
            </Text>
         </Banner>

         <SplitWithImage />
      </>
   );
}

export default App;
