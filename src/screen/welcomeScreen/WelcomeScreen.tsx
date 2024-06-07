import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Connexion from "../connexionScreen/Connexion";

const WelcomeScreen = () =>{
    const [isWelcome, setIsWelcome] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{setIsWelcome(false)},2000)
    },[])
    return(isWelcome ?<Text style={{margin:100, fontSize:30,}}>Hello</Text>:<Connexion/>)
}

export default WelcomeScreen;