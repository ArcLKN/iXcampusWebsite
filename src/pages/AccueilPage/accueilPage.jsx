// /src/pages/AccueilPage/accueilPage.jsx
import React, { useState, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button, Center, Flex, Box, Text } from "@chakra-ui/react";
import Accueil1 from "./accueil1";
import Accueil2 from "./accueil2";
import Header from "../../components/Header";
import Accueil3 from "./accueil3";

export default function Home() {
    const [language, setLanguage] = useState("FR");
    const [isWhiteHeader, setIsWhiteHeader] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const whiteHeaderY = [[0, window.innerHeight], [window.innerHeight*2, window.innerHeight*3]]

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log("Scroll Y:", scrollPosition);
        setScrollY(scrollPosition);
        for (let position in whiteHeaderY) {
            if (whiteHeaderY[position][0] <= scrollPosition && scrollPosition < whiteHeaderY[position][1]) {
                setIsWhiteHeader(true)
            }
            else setIsWhiteHeader(false)
        
        }
    };

    // UseEffect to add the scroll event listener
    useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach the scroll event listener

    // Cleanup the event listener when the component unmounts
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

	return (
		<>
            <title>iXcampus</title>
            <Header language={language} isWhiteHeader={isWhiteHeader}/>
            <Flex direction={"column"} w={"100%"} overflowX={"hidden"}>
                <Accueil1 language={language} setLanguage={setLanguage}/>
                <Accueil2 language={language}/>
                <Accueil3 language={language}/>
            </Flex>
        </>
    )
}