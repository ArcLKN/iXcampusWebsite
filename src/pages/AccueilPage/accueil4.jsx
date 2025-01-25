import React, { useState } from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";

export default function Accueil4({ language }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imagesTexts = [
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
    ["Plateaux techniques partagés", "Ayez accès à des Fablabs, des salles blanches, ainsi que des équipements de tests et mesures."],
  ];

  return (
    <Center bg="white" w="100%" h="100vh" m={0} overflow="hidden" py={20}>
      <VStack direction={"column"} spacing={14} textAlign="center" py={10} height={"100%"}>
        <Text fontSize={40} fontWeight={"bold"}>IXPERIENCE</Text>
        <Text fontSize={18} lineHeight={1.2}>
          {language === "FR"
            ? "Plateaux techniques partagés ● Incubation ● Design Studio ● Plateaux industriels ● Formations ● Restaurants ● Sports ● Évènements"
            : "Shared technical platforms ● Incubation ● Design Studio ● Industrial platforms ● Training ● Restaurants ● Sports ● Events"}
        </Text>
        <HStack align={"flex-start"} spacing={8} justifyContent={"center"} h="580px">
          {/* Loop through the images and texts */}
          {Array.from({ length: 8 }, (_, i) => (
            <Flex key={i} direction="column"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                height={hoveredIndex !== null ? "580px" : "500px"}
                width={hoveredIndex === i ? "50%" : "80px"}
                transition="width 0.1s ease">
              <Image
                src={`bank${i + 1}.png`} // Fixed path
                alt={`Image ${i + 1}`}
                height="500px"
                objectFit="cover"
              />
              {hoveredIndex === i && (
                <Box textAlign="left">
                  <Text fontWeight={"semibold"} fontSize={20}>
                    {imagesTexts[i][0]}
                  </Text>
                  <Text>{imagesTexts[i][1]}</Text>
                </Box>
              )}
            </Flex>
          ))}
        </HStack>
      </VStack>
    </Center>
  );
}
