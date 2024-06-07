import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { insertNewUser } from "../../store/userActions";
import styles from "./AjoutInterlocuteurStyle";
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
            <Text style={styles.utilisateur}>Ajouter un nouvel interlocuteur</Text>
            <TextInput style={styles.input} 
            placeholder="username..." 
            value={username}
            onChangeText={(name)=>setUsername(name)}/>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.touch} onPress={() =>(setUsername(""),navigation.navigate("Users"))}>
                <Text style={styles.touchableText}>Retour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() =>(AjoutInterlocuteurHandler(),navigation.navigate("Users"))}>
                <Text style={styles.touchableText}>Ajouter</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default AjoutInterlocuteur;