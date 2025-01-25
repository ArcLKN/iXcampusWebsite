import React, {useState} from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";

export default function Accueil4 ({ language }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const images = [];
  for (let i = 1; i <= 8; i++) {
    images.push(
      <Image
        key={i}
        src={"../../../public/bank"+ i +".png"}
        alt={`Image ${i}`}
        height="500px"
        objectFit={"cover"}
        width={hoveredIndex === i ? "100%" : "80px"}
        transition="width 0.3s ease"
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
      />
    );
  }
    return (
        <Center bg="white" w="100%" h="100vh" m={0} overflow="hidden" p={20}>
            <Flex direction={"column"} textAlign="center" p={20}>
                <Text fontSize={40} fontWeight={"bold"}>IXPERIENCE</Text>
                <Text fontSize={20} lineHeight={1.2}>
                {language === "FR" ? "Plateaux techniques partagés - Incubation - Design Studio - Plateaux industriels - Formations - Restaurants - Sports - Évènements"
                : "Shared technical platforms - Incubation - Design Studio - Industrial platforms - Training - Restaurants - Sports - Events"}
                </Text>
                <HStack align={"center"} spacing={8} justifyContent={"center"}>
                    {images}
                </HStack>
            </Flex>
        </Center>
    );
};
