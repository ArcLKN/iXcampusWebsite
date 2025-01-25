// /src/pages/AccueilPage/accueilPage.jsx
import React, { useState, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button, Center, Flex, Box, Text } from "@chakra-ui/react";
import Accueil1 from "./accueil1";
import Accueil2 from "./accueil2";
import Header from "../../components/Header";
import Accueil3 from "./accueil3";
import Accueil4 from "./accueil4";
import Accueil5 from "./accueil5";
import Footer from "../../components/Footer";

export default function Home() {
    const [language, setLanguage] = useState("FR");
    const [isWhiteHeader, setIsWhiteHeader] = useState(true)
    const [scrollY, setScrollY] = useState(0);
    const whiteHeaderY = [[0, window.innerHeight-50], [window.innerHeight*2-50, window.innerHeight*3-50]]

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // console.log("Scroll Y:", scrollPosition);
        setScrollY(scrollPosition);
        for (let position in whiteHeaderY) {
            if (whiteHeaderY[position][0] <= scrollPosition && scrollPosition < whiteHeaderY[position][1]) {
                setIsWhiteHeader(true)
                break
            }
            else setIsWhiteHeader(false)
            //console.log(whiteHeaderY[position][0] <= scrollPosition, scrollPosition < whiteHeaderY[position][1])
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
                <Accueil4 language={language}/>
                <Accueil5 language={language}/>
                <Footer language={language}/>
            </Flex>
        </>
    )
}