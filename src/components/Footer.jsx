import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Footer({ language }) {
  return (
    <Center bgColor={"#191919"} w={"100vw"} p={20} color={"white"}>
        <Flex direction={"column"} align={"center"}>
            <Flex w="full" align={"center"} justify={"space-between"}>
                <HStack>
                    <Image src="/public/Certified_B_Corporation_B_Corp_Logo_2022_Black_RGB.svg.png" boxSize={28} objectFit='contain'/>
                    <Image src="/public/Logo_France_2030.svg" boxSize={24} objectFit='contain'/>
                </HStack>
                <Text opacity={0.6} fontWeight={"hairline"}>
                    &gt; IXCONNECT
                </Text>
            </Flex>
            <HStack spacing={10} align={"center"} w={"100%"} justifyContent={"center"} fontSize={25} mt={12}>
                <Text>LE CAMPUS</Text><Text>L'INCUBATEUR</Text><Text>NOTRE SAVOIR FAIRE</Text><Text>NOUS CONNAÎTRE</Text>
            </HStack>
            <Flex w="full" justifyContent={"flex-end"} mt={12}>
                <Text opacity={0.6} fontWeight={"hairline"}>Nous contacter</Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={40}>
            I X C A M P U S
            </Text>
            <HStack spacing={8} align={"center"} w={"100%"} justifyContent={"center"} fontSize={10} mt={6}>
                <Text>Mentions légales</Text><Text>Politique de confidentialité</Text><Text>Gestion des données personnelles</Text>
            </HStack>
        </Flex>
    </Center>
  );
}
