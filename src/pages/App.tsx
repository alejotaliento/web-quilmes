import React from "react";
import { Stack, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { Banner, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";

function App() {
   return (
      <>
         <section className={styles.principalSection}>
            <Banner image="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg">
               <VStack
                  bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                  justify={"center"}
                  px={useBreakpointValue({ base: 4, md: 8 })}
                  w={"full"}
               >
                  <Stack align={"flex-start"} maxW={"2xl"} spacing={4}>
                     <Text as="h1" className={styles.title}>
                        EL SABOR DEL <br /> ENCUENTRO
                     </Text>
                     <Text as="h2" className={styles.subtitle}>
                        Cerveza que te acompaña <br /> en todo momento.
                     </Text>

                     <Stack alignSelf="flex-start" direction={"row"}>
                        <Button className={styles.buttonBanner} rounded={"full"}>
                           VER MÁS
                        </Button>
                     </Stack>
                  </Stack>
               </VStack>

               <Button className={styles.rowButton} rounded={"full"}>
                  <ArrowDownIcon h={6} w={6} />
               </Button>
               <Text as="h3" className={styles.endText}>
                  Desde 1888 en las puertas de nuestras casas en Quilmes te acompañamos en todos tus
                  encuentros. Somos la cerveza argentina con 200 años de historia.
               </Text>
            </Banner>
         </section>

         <section>
            <SplitWithImage />
         </section>
      </>
   );
}

export default App;
