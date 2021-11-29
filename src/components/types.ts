import { ImageProps } from "@chakra-ui/image";

export interface Product {
   _id: number;
   category?: string;
}

export interface Cerverza extends Product {
   name: string;
   image: {
      url: string;
      imageProps?: ImageProps;
   };
}
