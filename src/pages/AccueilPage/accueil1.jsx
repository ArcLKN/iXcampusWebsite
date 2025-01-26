import React from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";
import VideoCard from "./Components/VideoCard";

export default function Accueil1 ({ language, setLanguage }) {

    const handleLanguageChange = (language) => {
        setLanguage(language);
      };

	return (
        <Center bg="black" w={"100%"} h={"100vh"}>
            <Box w={"100%"} overflow={"hidden"} h={"100%"} position="absolute" top="0">
                <VideoCard videoSrc="/iXcampusWebsite/ixcampus-on-linkedin-ixcampus-saint-germain-en-laye-nouveau-campus-en-2025.mp4"/>
            </Box>
            <Flex zIndex={2} direction="column" w="100%" h="100%" justifyContent={"flex-end"} p={20}>
                <Box h={"5%"} w="100%"/>
                <HStack spacing={4} justify={"right"} h={"5%"} mt={6}>
                    <Text
                    _hover={{
                        color: "#ab8957",  // Change the text color on hover
                        transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                    }}
                    color={language === "FR" ? "#ab8957" : "white"}
                    onClick={() => handleLanguageChange("FR")}
                    >
                        FR
                    </Text>
                    <Text color="white">/</Text>
                    <Text
                    _hover={{
                        color: "#ab8957",  // Change the text color on hover
                        transition: "color 0.3s ease-in-out",  // Smooth transition for color change
                    }}
                    color={language === "EN" ? "#ab8957" : "white"}
                    onClick={() => handleLanguageChange("EN")}>
                        EN
                    </Text>
                </HStack>
            </Flex>
        </Center>
	);
};