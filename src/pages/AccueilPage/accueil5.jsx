import React from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";
import NewsCard from "./Components/newsCard";

export default function Accueil5 ({ language }) {
    return (
        <Center bg="white" w="full" h={"full"} m={0} overflow="hidden" p={20}>
            <VStack direction={"column"} w="full" spacing={16} h={"full"} textAlign="center">
                    <Text fontSize={40} fontWeight={"bold"}>{language === "FR" ? "NOS ACTUALITÉS" : "OUR NEWS"}</Text>
                    <HStack spacing={6} w="full" height={"80vh"} alignItems={"flex-start"} justifyContent={"center"}>
                        <VStack height="100%" spacing={6} direction="column" width={"20%"}>
                        <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news1.jpg"} size={1}/>
                        <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news2.png"} size={2}/>
                        </VStack>
                        <VStack height="100%" spacing={6} direction="column" width={"20%"}>
                        <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news3.png"} size={2}/>
                            <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news4.png"} size={1}/>
                        </VStack>
                        <VStack height="100%" spacing={6} direction="column" width={"20%"}>
                        <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news5.jpg"} size={1}/>
                        <NewsCard language={language} textDict={{"EN": ["Title", "Description"], "FR": ["Titre", "Description"]}} imageSrc={"/news6.png"} size={2}/>
                        </VStack>

                    </HStack>
            </VStack>
        </Center>
    );
};
