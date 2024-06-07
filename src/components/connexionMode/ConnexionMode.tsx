import React from "react";
import { View, Image } from "react-native";
import styles from "./ConnexionModeStyle";

const ConnexionMode = ({ source }) => {
    return (
        <View
            style={styles.container}>
            <Image source={source} style={styles.image} />
        </View>
    )
}
export default ConnexionMode;