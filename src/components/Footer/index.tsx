import React from "react";
import {
   Box,
   Container,
   Divider,
   Stack,
   Text,
   useColorModeValue,
   useMediaQuery,
   Image,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { SocialButton } from "../SocialButton";
import { dataImages } from "../../data";

export const Footer = () => {
   const [isLargerThan425] = useMediaQuery("(max-width: 425px)");
   const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

   return (
      /* TODO: Arreglar space-between entre los elementos del footer */
      <Box as="footer" bgColor="#031532" color={useColorModeValue("gray.700", "gray.200")}>
         <Container
            align={{ base: "center" }}
            as={Stack}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "space-between" }}
            maxW="full"
            padding={4}
            py={4}
         >
            <Image
               alt="Logo Footer"
               cursor="pointer"
               margin="15px"
               src={dataImages.logoHeader}
               width="180px"
            />

            <Stack color="white" direction="column" py={5} spacing={10} width="100%">
               <Box
                  alignItems="center"
                  alignSelf="center"
                  display="flex"
                  flexDirection={isLargerThan768 ? "column" : "row"}
                  textAlign="center"
               >
                  <Text>POLITICA DE PRIVACIDAD</Text>
                  <Divider
                     bgColor="white"
                     height={isLargerThan768 ? "1px" : "15px"}
                     margin="10px"
                     orientation={isLargerThan768 ? "horizontal" : "vertical"}
                  />
                  <Text>BASES Y CONDICIONES</Text>
                  <Divider
                     bgColor="white"
                     height={isLargerThan768 ? "1px" : "15px"}
                     margin="10px"
                     orientation={isLargerThan768 ? "horizontal" : "vertical"}
                  />
                  <Text>OPORTUNIDADES LABORALES</Text>
               </Box>
               <Text textAlign="center">INFOMACION OFICIAL DE LA COMPAÑIA</Text>
               <Text fontSize="13px" textAlign="center">
                  BEBER CON MODERACIÓN.PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. NO COMPARTA EL
                  CONTENIDO CON MENORES. Quilmes®
               </Text>
            </Stack>

            <Stack
               direction={isLargerThan425 ? "row" : "column"}
               margin="15px !important"
               spacing={6}
            >
               <SocialButton href={"#"} label={"Twitter"}>
                  <FaTwitter size={30} />
               </SocialButton>
               <SocialButton href={"#"} label={"YouTube"}>
                  <FaYoutube size={30} />
               </SocialButton>
               <SocialButton href={"#"} label={"Instagram"}>
                  <FaInstagram size={30} />
               </SocialButton>
               <SocialButton href={"#"} label={"Facebook"}>
                  <FaFacebook size={30} />
               </SocialButton>
            </Stack>
         </Container>
      </Box>
   );
};
