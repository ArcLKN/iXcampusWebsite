import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Footer({ language }) {
  return (
    <Center bgColor={"#191919"} w={"100vw"} p={20} color={"white"}>
        <Flex direction={"column"} align={"center"}>
            <Flex w="full" align={"center"} justify={"space-between"}>
                <HStack>
                    <Image src="/iXcampusWebsite/Certified_B_Corporation_B_Corp_Logo_2022_White.png" boxSize={28} objectFit='contain'/>
                    <Image src="/iXcampusWebsite/Logo_France_2030_White.png" boxSize={24} objectFit='contain'/>
                </HStack>
                <Text opacity={0.6} fontWeight={"hairline"}>
                    &gt; IXCONNECT
                </Text>
            </Flex>
            <HStack spacing={10} align={"center"} w={"100%"} justifyContent={"center"} fontSize={25} mt={12}>
                <Text>{language === "FR" ? "LE CAMPUS" : "THE CAMPUS"}</Text>
                <Text>{language === "FR" ? "L'INCUBATEUR" : "THE INCUBATOR"}</Text>
                <Text>{language === "FR" ? "NOTRE SAVOIR FAIRE" : "OUR KNOW-HOW"}</Text>
                <Text>{language === "FR" ? "NOUS CONNAÎTRE" : "ABOUT US"}</Text>
            </HStack>
            <Flex w="full" justifyContent={"flex-end"} mt={12}>
                <Text opacity={0.6} fontWeight={"hairline"}>{language === "FR" ? "Nous contacter" : "Contact us"}</Text>
            </Flex>
            <Text fontWeight={"bold"} fontSize={40}>
            I X C A M P U S
            </Text>
            <HStack spacing={8} align={"center"} w={"100%"} justifyContent={"center"} fontSize={10} mt={6}>
                <Text>{language === "FR" ? "Mentions légales" : "Legal Notice"}</Text>
                <Text>{language === "FR" ? "Politique de confidentialité" : "Privacy Policy"}</Text>
                <Text>{language === "FR" ? "Gestion des données personnelles" : "Personal Data Management"}</Text>
            </HStack>
        </Flex>
    </Center>
  );
}
