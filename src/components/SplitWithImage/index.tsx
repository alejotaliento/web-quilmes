import React from "react";
import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Stack,
   StackDivider,
   // Icon,
   useColorModeValue,
} from "@chakra-ui/react";
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
import { ReactElement } from "react";

export interface FeatureProps {
   text: string;
   iconBg: string;
   icon?: ReactElement;
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

export const SplitWithImage = () => {
   return (
      <Container maxW={"5xl"} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
               <Text
                  alignSelf={"flex-start"}
                  fontSize={"sm"}
                  fontWeight={600}
                  p={2}
                  rounded={"md"}
                  textTransform={"uppercase"}
               >
                  Our Story
               </Text>
               <Heading>A digital Product design agency</Heading>
               <Text color={"gray.500"} fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore
               </Text>
               <Stack
                  divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
                  spacing={4}
               >
                  <Feature
                     // icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} h={5} w={5} />}
                     iconBg={useColorModeValue("yellow.100", "yellow.900")}
                     text={"Business Planning"}
                  />
                  <Feature
                     // icon={<Icon as={IoLogoBitcoin} color={"green.500"} h={5} w={5} />}
                     iconBg={useColorModeValue("green.100", "green.900")}
                     text={"Financial Planning"}
                  />
                  <Feature
                     // icon={<Icon as={IoSearchSharp} color={"purple.500"} h={5} w={5} />}
                     iconBg={useColorModeValue("purple.100", "purple.900")}
                     text={"Market Analysis"}
                  />
               </Stack>
            </Stack>
            <Flex>
               <Image
                  alt={"feature image"}
                  objectFit={"cover"}
                  rounded={"md"}
                  src={
                     "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
               />
            </Flex>
         </SimpleGrid>
      </Container>
   );
};
