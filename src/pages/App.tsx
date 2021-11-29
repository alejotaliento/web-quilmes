import React from "react";
import {
   Stack,
   Button,
   Text,
   VStack,
   useBreakpointValue,
   Box,
   useMediaQuery,
   Image,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { Banner, Card, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";
import { dataCervezas } from "../data";

function App() {
   const [isLargerThan425] = useMediaQuery("(max-width: 425px)");
   const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

   return (
      <>
         <Box as="section" className={styles.principalSection}>
            <Banner
               flexProps={{ height: "100vh" }}
               image="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg"
            >
               <Stack
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
               </Stack>

               <Box
                  alignSelf="flex-end"
                  justifySelf="center"
                  left={isLargerThan425 ? "45%" : "47%"}
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
            <Banner
               flexProps={{
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "700px",
                  height: isLargerThan425 ? "auto" : "100vh",
                  bgColor: isLargerThan425 ? "#fafafa7a" : "",
               }}
               image={
                  isLargerThan425
                     ? ""
                     : "https://i.postimg.cc/xjMNB5xm/wil-stewart-UEr-Wo-QEo-Mrc-unsplash.jpg"
               }
            >
               <Stack h="100%" marginY={20} padding={25} textAlign="center">
                  <VStack spacing={5}>
                     <Text as="h1" className={styles.title}>
                        NUESTRAS VARIEDADES
                     </Text>
                     <Text as="h2" className={styles.subtitle}>
                        Tenemos la cerveza perfecta para cada momento. Elegí la
                        {!isLargerThan425 && <br />} que más te guste y disfrútala con amigos.
                     </Text>
                  </VStack>
                  <Stack
                     alignItems="center"
                     alignSelf="center"
                     direction={isLargerThan425 ? "column" : "row"}
                     justify="center"
                     minHeight={500}
                  >
                     {dataCervezas.map((cerveza) => (
                        <Card
                           key={cerveza._id}
                           product={{
                              _id: cerveza._id,
                              name: cerveza.name,
                              image: {
                                 url: cerveza.image.url
                                    ? cerveza.image.url
                                    : "http://placehold.jp/750x750.png",
                              },
                           }}
                        />
                     ))}
                  </Stack>
               </Stack>
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
                     fontSize={isLargerThan768 ? "15px" : "35px"}
                     width="85%"
                  >
                     Además de la Quilmes que <br /> tomás en tu casa queremos que disfrutes la que
                     servimos en la nuestra, llega directamente de <br /> la cervecería
                  </Text>
                  <Button alignSelf="center" className={styles.buttonBanner} rounded="full">
                     CONOCER
                  </Button>
               </VStack>
            </SplitWithImage>
         </Box>

         <Box as="section">
            <Banner
               flexProps={{ height: "100vh", justify: "center" }}
               image="https://1.bp.blogspot.com/-PaFsTB1ELJU/XC0dXQ955VI/AAAAAAAAuPY/ALT979M24GQit-Qy25rwSUsLB1CRH-hwACLcBGAs/w1200-h630-p-k-no-nu/M%25C3%25A1quina%2BRegadora%2Bde%2Bla%2BMunicipalidad%2Bde%2Bla%2BCiudad%2Bde%2BMendoza.%2B%2528a%25C3%25B1o%2B1916%2529.jpg"
            >
               <Stack
                  align="center"
                  alignSelf="center"
                  direction="column"
                  marginLeft="20px"
                  maxW="2xl"
                  spacing={10}
                  textAlign="center"
               >
                  <Text as="h1" className={styles.title}>
                     HECHA CON <br /> CARIÑO
                  </Text>
                  <Text as="h2" className={styles.subtitle}>
                     Conoce todo sobre nuestra <br /> historia, ingredientes y <br /> métodos de
                     elaboración.
                  </Text>

                  <Box alignSelf="center" direction="row">
                     <Button className={styles.buttonBanner} rounded="full">
                        VER MÁS
                     </Button>
                  </Box>
               </Stack>
               <Text as="h3" className={styles.endText} position="absolute" right={0} width="auto">
                  Primer bodega Quilmes <br /> año 1888
               </Text>
            </Banner>
         </Box>

         <Box as="section">
            <SplitWithImage
               containerProps={{
                  bgColor: "#031532",
               }}
               image={"https://cdn.pixabay.com/photo/2017/03/22/18/37/beer-2166004_1280.jpg"}
               imageOrientation="left"
            >
               <Image
                  alt="IMAGE"
                  height="100%"
                  opacity={0.8}
                  src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
               />
            </SplitWithImage>
         </Box>
      </>
   );
}

export default App;
