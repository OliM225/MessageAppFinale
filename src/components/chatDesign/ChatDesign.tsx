import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ChatDesignStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
const ChatDesign = ({ Children,onPress }) => {
    return (
        <View style={styles.pressable}>
            <TouchableOpacity style={styles.pressableChat} onPress={onPress}>
                <Image source={require("../../assets/user.jpg")} style={styles.image} resizeMode="cover" />
                <Text style={styles.chat}>{Children}</Text>
            </TouchableOpacity>
        </View>
)}
export default ChatDesign;

