import React from "react";
import { Container, SimpleGrid, Image, Flex, Text, Stack } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface FeatureProps {
   text: string;
   iconBg: string;
   icon?: ReactElement;
}

export interface SplitWithImage {
   containerProps?: ContainerProps;
   image: string;
}

export const Feature = ({ text, icon, iconBg }: FeatureProps) => {
   return (
      <Stack align={"center"} direction={"row"}>
         <Flex align={"center"} bg={iconBg} h={8} justify={"center"} rounded={"full"} w={8}>
            {icon}
         </Flex>
         <Text fontWeight={600}>{text}</Text>
      </Stack>
   );
};

export const SplitWithImage: React.FC<SplitWithImage> = ({ children, image, containerProps }) => {
   return (
      <Container maxW="full" padding={0} {...containerProps}>
         <SimpleGrid columns={{ base: 2, md: 2 }} h="100vh">
            {children}
            <Flex h="full">
               <Image alt={"feature image"} objectFit={"cover"} src={image} />
            </Flex>
         </SimpleGrid>
      </Container>
   );
};
