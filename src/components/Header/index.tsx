import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export const Header = () => {
   return (
      <>
         <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex alignItems={"center"} h={16} justifyContent={"space-between"}>
               <Box>Logo</Box>
            </Flex>
         </Box>
      </>
   );
};
