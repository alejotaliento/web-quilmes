import React from "react";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

export interface SocialButtonProps {
   children: React.ReactNode;
   label: string;
   href: string;
}

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
   return (
      <chakra.button
         _hover={{
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
         }}
         alignItems={"center"}
         as={"a"}
         bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
         cursor={"pointer"}
         display={"inline-flex"}
         h={8}
         href={href}
         justifyContent={"center"}
         rounded={"full"}
         transition={"background 0.3s ease"}
         w={8}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   );
};
