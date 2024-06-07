import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { insertNewUser } from "../../store/userActions";
const AjoutInterlocuteur = ({navigation})=>{
    const[username, setUsername] = useState<string>("");
    const { usersList } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    const AjoutInterlocuteurHandler = ()=>{
        dispatch(insertNewUser([...usersList,{id:new Date().getTime(), name:username}]))
        setUsername("");
    }
    return(
        <View>
            <Text style={{textAlign:"center",padding:20}}>Ajouter un nouvel interlocuteur</Text>
            <TextInput style={{borderWidth:2,marginHorizontal:20, marginVertical:15, paddingLeft:20}} 
            placeholder="username..." 
            value={username}
            onChangeText={(name)=>setUsername(name)}/>
            
            <View style={{flexDirection:"row",paddingHorizontal:100}}>
            <Button onPress={() =>(setUsername(""),navigation.navigate("Users"))} title="Retour"/>
            <Button onPress={() =>(AjoutInterlocuteurHandler(),navigation.navigate("Users"))} title="Confirmer"/>
            </View>
        </View>
    )
}
export default AjoutInterlocuteur;