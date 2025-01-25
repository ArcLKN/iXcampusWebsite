import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function NewsCard({ language, textDict, imageSrc, size }) {
    return (<Box 
    flexGrow={size} 
    height="0" 
    width="100%" 
    position="relative" 
    overflow="hidden" 
    _hover={{ '& .hoverText': { opacity: 1, transform: 'translateY(0)' } }}
    >
        <Image 
            src={imageSrc}
            height="100%" 
            width="100%" 
            objectFit="cover" 
        />
        <Flex
        direction={"column"}
        justifyContent={"flex-end"}
        className="hoverText"
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        bgGradient="linear(to-t, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))"
        color="black"
        textAlign="left"
        minH={"50%"}
        p={4}
        opacity={0}
        transform="translateY(100%)"
        transition="all 0.3s ease-in-out"
        >
            <Text color={"#ab8957"} fontWeight={"semibold"}>{textDict[language][0]}</Text>
            <Text>{textDict[language][1]}</Text>
        </Flex>
    </Box>)
}