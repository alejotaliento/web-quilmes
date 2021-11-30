import React from "react";
import { Box, Center, Text, Stack, Image, Button, useMediaQuery } from "@chakra-ui/react";

import { Cerverza } from "../types";

export interface CardProps {
   product: Cerverza;
}

export const Card = ({ product }: CardProps) => {
   const isLargerThan768 = useMediaQuery("(max-width: 768px)");

   return (
      <Center paddingY={4}>
         <Box paddingX={2} pos={"relative"} role={"group"} rounded={"md"} w={"full"} zIndex={1}>
            <Box bgColor="transparent" height={250} rounded="md">
               <Image
                  height={250}
                  objectFit="cover"
                  objectPosition="center"
                  rounded="md"
                  src={product.image.url}
                  width={150}
                  {...product.image.imageProps}
               />
            </Box>
            <Stack align={"center"} color="white" pt={2}>
               <Text as="h2" fontFamily="Arial" fontSize={isLargerThan768 ? 14 : 18}>
                  {product.name}
               </Text>
               <Stack align={"center"} direction="column">
                  <Button
                     _hover={{ bg: "#ffe922" }}
                     bgColor="transparent"
                     border="2px solid"
                     borderColor="#ffe922"
                     rounded="full"
                  >
                     Comprar
                  </Button>
                  <Text fontSize={14}>VER MAS</Text>
               </Stack>
            </Stack>
         </Box>
      </Center>
   );
};
