import React, { useState, useEffect } from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

export default function Footer({ language }) {
  return (
    <Center bgColor={"#191919"} w={"100vw"} p={20} color={"white"}>
        <Flex direction={"column"} align={"center"}>
            <Flex w="full" align={"center"} justify={"space-between"}>
                <HStack>
                    <Image src="/iXcampusWebsite/Certified_B_Corporation_B_Corp_Logo_2022_White.png" boxSize={28} objectFit='contain'/>
                    <Image src="/iXcampusWebsite/Logo_France_2030_White.png" boxSize={24} objectFit='contain'/>
                </HStack>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }} opacity={0.6} fontWeight={"hairline"}>
                    &gt; IXCONNECT
                </ChakraLink>
            </Flex>
            <HStack spacing={10} align={"center"} w={"100%"} justifyContent={"center"} fontSize={25} mt={12}>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "LE CAMPUS" : "THE CAMPUS"}</ChakraLink>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "L'INCUBATEUR" : "THE INCUBATOR"}</ChakraLink>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "NOTRE SAVOIR FAIRE" : "OUR KNOW-HOW"}</ChakraLink>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "NOUS CONNAÎTRE" : "ABOUT US"}</ChakraLink>
            </HStack>
            <Flex w="full" justifyContent={"flex-end"} mt={12}>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }} opacity={0.6} fontWeight={"hairline"}>{language === "FR" ? "Nous contacter" : "Contact us"}
                </ChakraLink>
            </Flex>
            <Text fontWeight={"bold"} fontSize={40}>
            I X C A M P U S
            </Text>
            <HStack spacing={8} align={"center"} w={"100%"} justifyContent={"center"} fontSize={10} mt={6}>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}
  >{language === "FR" ? "Mentions légales" : "Legal Notice"}</ChakraLink>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "Politique de confidentialité" : "Privacy Policy"}</ChakraLink>
                <ChakraLink
                _hover={{
                    color: "#ab8957",  // Change the text color on hover
                    transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                }}>{language === "FR" ? "Gestion des données personnelles" : "Personal Data Management"}</ChakraLink>
            </HStack>
        </Flex>
    </Center>
  );
}
