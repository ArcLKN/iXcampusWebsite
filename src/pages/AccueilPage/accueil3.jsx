import React, {useState} from "react";
import { Box, Text, Center, Flex, VStack, Image, HStack } from "@chakra-ui/react";
import OscillatingCircles from "../../components/OscillatingCircles";

export default function Accueil3 ({ language }) {

    const [textToShow, setTextToShow] = useState(0);
    const texts = [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis ante eu auctor.",
                "Etiam at quam massa. Suspendisse eleifend ex pellentesque, dictum quam sed, sodales ipsum. Vestibulum mauris ipsum, laoreet id ultricies interdum.",
                "Nam auctor, est a auctor convallis, sem mi finibus erat, a commodo turpis risus ac orci. Pellentesque erat ex, iaculis in placerat eget, aliquet ut elit."
            ],
            ["Suspendisse imperdiet eu elit ornare aliquet. Phasellus efficitur felis eget accumsan euismod. Nam est massa, venenatis id auctor non, porttitor vitae ipsum.",
                "Proin feugiat magna mi, quis accumsan neque porta pulvinar. Mauris in sodales nisl, at elementum ipsum. Sed at tristique sem.",
                "Donec at suscipit elit, ac porttitor libero. Cras gravida arcu vitae elit commodo vestibulum. Pellentesque at elementum velit."
            ],
            ["Fusce porta eu erat vitae porttitor.",
                "In metus dui, cursus in posuere nec, iaculis ac tellus. Nunc laoreet ut quam ut tincidunt. Nulla quis sagittis ante, fringilla pulvinar enim. Praesent in gravida sem.",
                "Quisque dictum hendrerit sapien, quis varius velit volutpat eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            ]
        ]

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
                bgColor="rgba(20, 20, 20, 0.9)"
                />
                <Box>
                    <Box
                    position="absolute" 
                    top="10%" 
                    right="30%"
                    >
                        <OscillatingCircles setTextToShow={setTextToShow} id={1}/>
                        <Text 
                            position="absolute" 
                            top="50%" 
                            left="50%" 
                            transform="translate(-50%, -50%)" 
                            color="white" 
                            fontSize="20px"
                        >
                            {language === "FR" ? "Plateforme d'innovation" : "Innovation platform"}
                        </Text>
                    </Box>
                    <Box
                    position="absolute" 
                    top="-20%" 
                    right="20%"
                    >
                        <OscillatingCircles setTextToShow={setTextToShow} id={2}/>
                        <Text 
                            position="absolute" 
                            top="50%" 
                            left="50%" 
                            transform="translate(-50%, -50%)" 
                            color="white" 
                            fontSize="20px"
                        >
                            {language === "FR" ? "Plateaux industriels" : "Industrial platforms"}
                        </Text>
                    </Box>
                    <Box
                    position="absolute"
                    right="10%"
                    top={"5%"}
                    >
                        <OscillatingCircles setTextToShow={setTextToShow} id={3}/>
                        <Text 
                            position="absolute" 
                            top="50%" 
                            left="50%" 
                            transform="translate(-50%, -50%)" 
                            color="white" 
                            fontSize="20px"
                        >
                            {language === "FR" ? "Faire communauté" : "Building community"}
                        </Text>
                    </Box>
                </Box>
                <Center
                position="absolute"
                left="50%"
                w="50%"
                p={20}
                pt={40}>
                    <VStack spacing={20}>
                        <HStack
                            spacing={10}
                        >
                            <Text color={"white"}>Icon</Text>
                            <Text color={"white"} fontWeight={"bold"} fontSize={40}>{language === "FR" ? "Comment peut-on vous accompagner ?" : "How can we support you?"}</Text>
                        </HStack>
                        {
                            textToShow > 0 ? <VStack spacing={20}>
                                <Text color={"white"}>{texts[textToShow-1][0]}</Text>
                                <Text color={"white"}>{texts[textToShow-1][1]}</Text>
                                <Text color={"white"}>{texts[textToShow-1][2]}</Text>
                            </VStack> :
                            <></>
                        }
                    </VStack>
                </Center>
            </Box>
            
        </Center>
    );
};
