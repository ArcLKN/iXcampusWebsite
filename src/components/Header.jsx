import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Header({ language, isWhiteHeader }) {
  return (
    <Center w={"100vw"} h={"5vh"} p={20} position={"fixed"} m={0} overflowX="hidden" scrollBehavior={"unset"} zIndex={10}>
      <Flex align={"center"} w={"100%"} justifyContent={"center"}>
        <Text position="absolute" left={20} color={isWhiteHeader ? "white" : "black"}>
          {language === "FR" ? "Icon" : "IconEN"}
        </Text>
        <Text color={isWhiteHeader ? "white" : "black"} fontWeight={"bold"} fontSize={40}>
          I X C A M P U S
        </Text>
        <Text
          mixBlendMode={"difference"}
          position="absolute"
          right={20}
          color={isWhiteHeader ? "white" : "black"}
        >
          {language === "FR" ? "Accès résidents" : "Residents access"}
        </Text>
      </Flex>
    </Center>
  );
}
