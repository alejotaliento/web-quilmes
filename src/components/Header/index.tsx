import { ReactNode } from "react";
import {
   Box,
   Flex,
   Avatar,
   Link,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   // useDisclosure,
   useColorModeValue,
   Stack,
   useColorMode,
   Center,
   HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => (
   <Link
      _hover={{
         textDecoration: "none",
         bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
      px={2}
      py={1}
      rounded={"md"}
   >
      {children}
   </Link>
);

export default function Nav() {
   const { colorMode, toggleColorMode } = useColorMode();
   // const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex alignItems={"center"} h={16} justifyContent={"space-between"}>
               <Box>Logo</Box>

               <HStack alignItems="flex-start">
                  <NavLink>Link</NavLink>
                  <NavLink>Link</NavLink>
                  <NavLink>Link</NavLink>
                  <NavLink>Link</NavLink>
               </HStack>

               <Flex alignItems={"center"}>
                  <Stack direction={"row"} spacing={7}>
                     <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                     </Button>

                     <Menu>
                        <MenuButton
                           as={Button}
                           cursor={"pointer"}
                           minW={0}
                           rounded={"full"}
                           variant={"link"}
                        >
                           <Avatar
                              size={"sm"}
                              src={"https://avatars.dicebear.com/api/male/username.svg"}
                           />
                        </MenuButton>
                        <MenuList alignItems={"center"}>
                           <br />
                           <Center>
                              <Avatar
                                 size={"2xl"}
                                 src={"https://avatars.dicebear.com/api/male/username.svg"}
                              />
                           </Center>
                           <br />
                           <Center>
                              <p>Username</p>
                           </Center>
                           <br />
                           <MenuDivider />
                           <MenuItem>Your Servers</MenuItem>
                           <MenuItem>Account Settings</MenuItem>
                           <MenuItem>Logout</MenuItem>
                        </MenuList>
                     </Menu>
                  </Stack>
               </Flex>
            </Flex>
         </Box>
      </>
   );
}
