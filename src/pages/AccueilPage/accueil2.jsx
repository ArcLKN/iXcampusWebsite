import React from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";

export default function Accueil2 ({ language }) {
    return (
        <Center bg="white" w="100%" h="100vh" m={0} overflow="hidden" p={20}>
            <VStack direction={"column"} spacing={16} textAlign="center" p={20}>
                <Text fontSize={25}>{language === "FR" ? "Faire campus et innover" : "Campus and innovation"}</Text>
                <Text fontSize={60} fontWeight={"semibold"} color={"lightgray"} lineHeight={1.2}>
                {language === "FR" ? "Dans nos campus, nous transformons les innovations deeptech en solutions industrielles à impact."
                : "On our campuses, we transform deeptech innovations into high-impact industrial solutions."}
                </Text>
                <HStack align={"center"} spacing={10}>
                    <Image src='/Certified_B_Corporation_B_Corp_Logo_2022_Grey.png' objectFit='contain' h="200px" w="auto"/>
                    <Image src='/logo-TI29Grey.png' objectFit='contain' w="300px" h="auto"/>
                    <Image src='/Logo_France_2030_Grey.png' objectFit='contain' h="150px" w="auto"/>
                    <Image src='/logo-terre-d-innovation-2.png' objectFit='contain' h="150px" w="auto"/>
                </HStack>
            </VStack>
        </Center>
    );
};
