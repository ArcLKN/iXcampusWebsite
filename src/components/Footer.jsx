import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Footer({ language }) {
  return (
    <Center bgColor={"#191919"} w={"100vw"} p={20}>
        <HStack align={"center"} w={"100%"} justifyContent={"center"} color={"white"} fontWeight={"semibold"} fontSize={20}>
            <Text>LE CAMPUS</Text><Text>L'INCUBATEUR</Text><Text>NOTRE SAVOIR FAIRE</Text><Text>NOUS CONNAÎTRE</Text>
        </HStack>
        <Text color={"white"} fontWeight={"bold"} fontSize={40}>
        I X C A M P U S
        </Text>
    </Center>
  );
}
