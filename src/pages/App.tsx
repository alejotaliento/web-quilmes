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
   Divider,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { Banner, Card, SplitWithImage } from "../components";
import styles from "../styles/Home.module.scss";
import { dataCervezas, dataImagesBanner } from "../data";

function App() {
   const [isMobile] = useMediaQuery("(max-width: 425px)");
   const [isTablet] = useMediaQuery("(max-width: 768px)");

   return (
      <>
         <Box as="section" className={styles.principalSection}>
            <Banner flexProps={{ height: "100vh" }} image={dataImagesBanner.section1}>
               <Stack
                  alignItems={isMobile ? "center" : "flex-start"}
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
                  left={isMobile ? "45%" : "47%"}
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
                  height: isMobile ? "auto" : "100vh",
                  bgColor: isMobile ? "" : "",
               }}
               image={isMobile ? "" : dataImagesBanner.section2}
            >
               <Stack h="100%" justifyContent="center" marginY={20} padding={25} textAlign="center">
                  <VStack spacing={5}>
                     <Text as="h1" className={styles.title}>
                        NUESTRAS VARIEDADES
                     </Text>
                     <Text as="h2" className={styles.subtitle}>
                        Tenemos la cerveza perfecta para cada momento. Elegí la
                        {!isMobile && <br />} que más te guste y disfrútala con amigos.
                     </Text>
                  </VStack>
                  <Stack
                     alignItems="center"
                     alignSelf="center"
                     direction={isMobile ? "column" : "row"}
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

         {isMobile && <Divider marginY={15} />}

         <Box as="section">
            <SplitWithImage
               containerProps={{
                  bgColor: "#031532",
               }}
               image={{
                  url: "https://image.freepik.com/foto-gratis/primer-plano-hombres-brindando-cerveza_171337-13664.jpg",
                  side: "right",
               }}
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
                     fontSize={isTablet ? "15px" : "35px"}
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
               image={dataImagesBanner.section3}
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
                  height: isMobile ? "auto" : "100vh",
               }}
               image={{
                  url: "https://i.postimg.cc/SQ16kx4b/banner-1-550.png",
                  side: "left",
                  className: styles.imageLastSection,
               }}
            >
               <Image
                  alt="IMAGE"
                  height={isMobile ? "auto" : "100vh"}
                  objectPosition="center"
                  opacity={0.9}
                  src="https://i.postimg.cc/HWtpyrxF/Mesa-de-trabajo-8.png"
                  width="100%"
               />
            </SplitWithImage>
         </Box>
      </>
   );
}

export default App;
