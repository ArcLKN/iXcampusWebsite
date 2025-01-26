import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Icon } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header({ language, isWhiteHeader }) {
  return (
    <Center w={"100vw"} h={"5vh"} p={20} position={"fixed"} m={0} overflow="hidden" scrollBehavior={"unset"} zIndex={10}>
      <Flex align={"center"} w={"100%"} justifyContent={"center"}>
          <Icon position="absolute" left={20} as={HamburgerIcon} color={isWhiteHeader ? "white" : "black"} boxSize={6}/>
        <Text color={isWhiteHeader ? "white" : "black"} fontWeight={"bold"} fontSize={40}>
          I X C A M P U S
        </Text>
        <ChakraLink
          mixBlendMode={"difference"}
          position="absolute"
          right={20}
          color={isWhiteHeader ? "white" : "black"}
          _hover={{
              color: "#ab8957",  // Change the text color on hover
              transition: "color 0.3s ease-in-out",  // Smooth transition for color change
          }}
        >
          {language === "FR" ? "> Accès résidents" : "> Residents access"}
        </ChakraLink>
      </Flex>
    </Center>
  );
}
