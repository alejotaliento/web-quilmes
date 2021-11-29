import React from "react";
import { Container, SimpleGrid, Image, Flex, useMediaQuery } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

export interface SplitWithImage {
   containerProps?: ContainerProps;
   image: string;
   imageOrientation: "left" | "right";
}

export const SplitWithImage: React.FC<SplitWithImage> = ({
   children,
   image,
   containerProps,
   imageOrientation,
}) => {
   const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

   return (
      <Container maxW="full" padding={0} {...containerProps}>
         <SimpleGrid columns={{ base: 1, md: 2 }} h={isLargerThan768 ? "auto" : "100vh"}>
            {imageOrientation && imageOrientation === "left" && (
               <Flex h="full" w="full">
                  <Image alt={"feature image"} objectFit={"cover"} src={image} width="100%" />
               </Flex>
            )}
            {children}
            {imageOrientation && imageOrientation === "right" && (
               <Flex h="full" w="full">
                  <Image alt={"feature image"} objectFit={"cover"} src={image} width="100%" />
               </Flex>
            )}
         </SimpleGrid>
      </Container>
   );
};
