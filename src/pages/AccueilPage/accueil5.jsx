import React from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";

export default function Accueil5 ({ language }) {
    return (
        <Center bg="white" w="100%" m={0} overflow="hidden" p={20}>
            <VStack direction={"column"} spacing={16} textAlign="center">
                    <Text fontSize={40} fontWeight={"bold"}>{language === "FR" ? "NOS ACTUALITÉS" : "OUR NEWS"}</Text>
                    <Box>
                        
                    </Box>
            </VStack>
        </Center>
    );
};
