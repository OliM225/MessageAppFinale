import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./MessageCategorieStyle";
const MessageCategorie = ({children}) =>{
    return(
        <TouchableOpacity>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}
export default MessageCategorie;