import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    titleContainer: {
        marginHorizontal: 80,
        marginVertical: 20,
        padding: 15,
        borderRadius: 20,
        backgroundColor: "blue",
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    messageType: {
        flexDirection: "row",
        margin: 20,
    },
    plusContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ffc107",
        alignSelf: "flex-end",
        marginHorizontal: 10,
        marginVertical: -50

    },
    plus: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 28,
        color: "black"
    },
    chat: {
        marginHorizontal: 30,
        marginVertical: 10,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
    },
    chatSpec: {
        color: "#ffc107",
    },
    textInput: {
        backgroundColor: "lightgrey",
        marginHorizontal: 20,
        borderRadius: 25,
        height: 45,
        paddingLeft: 20,
        color: "black",
        fontWeight: "bold"
    },
})
export default styles;