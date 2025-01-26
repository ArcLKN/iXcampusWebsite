import React from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Accueil1 ({ language, setLanguage }) {

    const handleLanguageChange = (language) => {
        setLanguage(language);
      };

	return (
        <Center bg="black" w={"100%"} h={"100vh"} p={20}>
            <Flex direction="column" w="100%" h="100%" justifyContent={"flex-end"}>
                <Box h={"5%"} w="100%"/>
                <Image src='/iXcampusWebsite/iXcampusDecouvrez.jpg' objectFit='contain' h="90%"/>
                <HStack spacing={4} justify={"right"} h={"5%"}>
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