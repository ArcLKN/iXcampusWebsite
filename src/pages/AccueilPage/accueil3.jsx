import React from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";

export default function Accueil3 ({ language }) {
    return (
        <Center bg="white" w="100%" h="100vh" m={0} overflow="hidden">
            <Box 
            position="relative" 
            w="100%" 
            h="100%" 
            bgImage='../../../public/Campus.png'
            bgSize="cover" 
            bgPosition="center"
        >
            <Box 
                position="absolute" 
                top="0" 
                left="0" 
                w="100%" 
                h="100%" 
                bgColor="rgba(0, 0, 0, 0.5)" // Fond noir avec une opacité de 50%
                />
                <Text 
                    position="absolute" 
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)" 
                    color="white" 
                    fontSize="30px" 
                    fontWeight="bold"
                >
                    Votre Texte Ici
                </Text>
            </Box>
        </Center>
    );
};
