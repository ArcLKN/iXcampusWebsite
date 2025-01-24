import React from "react";
import { Box, Center, HStack, Text, Flex, Image } from "@chakra-ui/react";

export default function Accueil1 ({ language, setLanguage }) {

    const handleLanguageChange = (language) => {
        setLanguage(language);
        // Optional: Add additional logic here, such as updating a context or API call
      };

	return (
        <Center bg="black" w={"100%"} h={"100vh"}>
            <Flex direction="column" w="100%" h="100%" justifyContent={"flex-end"}>
                <Box h={"5%"} w="100%"/>
                <Image src='../../../public/iXcampusDecouvrez.jpg' objectFit='contain' h="90%"/>
                <HStack spacing={4} justify={"right"} h={"5%"}>
                    <Text
                    color="white"
                    onClick={() => handleLanguageChange("FR")}
                    >
                        FR
                    </Text>
                    <Text color="white">/</Text>
                    <Text
                    color="white"
                    onClick={() => handleLanguageChange("EN")}>
                        EN
                    </Text>
                </HStack>
            </Flex>
        </Center>
	);
};