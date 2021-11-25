import { Flex } from "@chakra-ui/react";

export interface BannerProps {
   image: string;
}

export const Banner: React.FC<BannerProps> = ({ children, image }) => {
   return (
      <Flex
         backgroundImage={`url(${image})`}
         backgroundPosition={"center center"}
         backgroundSize={"cover"}
         h={"100vh"}
         w={"full"}
      >
         {children}
      </Flex>
   );
};
