import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Box>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        width={["100%", "100%", "90%", "90%"]}
        margin={"auto"}
      >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          boxSizing="border-box"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontWeight={"700"} color={"#00856F"} fontSize={"x-large"}>
                Book Doctor
              </Text>
            </Box>

            <HStack
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight={"500"}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack spacing={4}>
              <Button color={"#00856F"} bgColor={"white"}>
                Sign Up
              </Button>

              <Button bgColor={"#00856F"} color={"white"}>
                Log In
              </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
