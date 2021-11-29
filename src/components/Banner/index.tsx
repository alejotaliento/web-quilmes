import { Flex, FlexProps } from "@chakra-ui/react";

export interface BannerProps {
   image: string;
   flexProps?: FlexProps;
}

export const Banner: React.FC<BannerProps> = ({ children, image, flexProps }) => {
   return (
      <Flex
         {...flexProps}
         backgroundImage={`url(${image})`}
         backgroundPosition={"center center"}
         backgroundSize={"cover"}
         w={"full"}
      >
         {children}
      </Flex>
   );
};
