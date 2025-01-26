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
                            <NewsCard language={language} textDict={{"EN": ["La Boucle 2023 – Imagine For Margo", "Description"], "FR": ["La Boucle 2023 – Imagine For Margo", "Description"]}} imageSrc={"/iXcampusWebsite/news1.jpg"} size={1}/>
                            <NewsCard
                                language={language}
                                textDict={{
                                    "EN": [
                                        "iXcampus Versailles Grand Parc incubation program",
                                        "Description"
                                    ],
                                    "FR": [
                                        "Programme d’incubation iXcampus Versailles Grand Parc",
                                        "Description"
                                    ]}}
                                imageSrc={"/iXcampusWebsite/news2.png"}
                                size={2}
                            />
                        </VStack>
                        <VStack height="100%" spacing={6} direction="column" width={"20%"}>
                            <NewsCard
                            language={language}
                            textDict={{
                                "EN": [
                                    "iXcampus announces B Corp certification", 
                                    "Description"
                                ],
                                "FR": [
                                    "iXcampus annonce sa labellisation B Corp", 
                                    "Description"
                                ]}}
                            imageSrc={"/iXcampusWebsite/news3.png"}
                            size={2}/>
                            <NewsCard
                            language={language}
                            textDict={{
                                "EN": [
                                    "Conference: tech to the rescue of the planet? Ph. Bihouix - Tuesday, February 6",
                                    "Description"
                                ],
                                "FR": [
                                    "Conférence : la tech au secours de la planète? Ph. Bihouix – Mardi 6 février",
                                    "Description"
                                ]}}
                            imageSrc={"/iXcampusWebsite/news4.png"} 
                            size={1}
                            />
                        </VStack>
                        <VStack height="100%" spacing={6} direction="column" width={"20%"}>
                            <NewsCard
                            language={language} textDict={{
                                "EN": [
                                    "Title",
                                    "Description"
                                ],
                                "FR": [
                                    "Titre",
                                    "Description"
                                ]}}
                            imageSrc={"/iXcampusWebsite/news5.jpg"}
                            size={1}/>
                            <NewsCard
                            language={language}
                            textDict={{
                                "EN": [
                                    "Screening: Why do we even work? Monday, February 6th - 7pm",
                                    "Description"],
                                "FR": [
                                    "Projection: Why do we even work ? Lundi 6 février – 19h",
                                    "Description"
                                ]}}
                            imageSrc={"/iXcampusWebsite/news6.png"}
                            size={2}/>
                        </VStack>

                    </HStack>
            </VStack>
        </Center>
    );
};
