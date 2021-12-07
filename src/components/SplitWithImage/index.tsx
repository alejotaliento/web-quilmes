import React from "react";
import { Container, SimpleGrid, Image, Flex, useMediaQuery } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

export interface SplitWithImageProps {
   containerProps?: ContainerProps;
   image: {
      url: string;
      side?: "left" | "right";
      className?: string;
   };
}

export const SplitWithImage: React.FC<SplitWithImageProps> = ({
   children,
   image,
   containerProps,
}) => {
   const [isTablet] = useMediaQuery("(max-width: 768px)");

   return (
      <Container maxW="full" padding={0} {...containerProps}>
         <SimpleGrid columns={{ base: 1, md: 2 }} h={isTablet ? "auto" : "100vh"}>
            {image.side && image.side === "left" && (
               <Flex className={image.className} h="full" w="full">
                  <Image alt={"feature image"} src={image.url} width="100%" />
               </Flex>
            )}
            {children}
            {image.side && image.side === "right" && (
               <Flex className={image.className} h="full" w="full">
                  <Image alt={"feature image"} objectFit={"cover"} src={image.url} width="100%" />
               </Flex>
            )}
         </SimpleGrid>
      </Container>
   );
};
