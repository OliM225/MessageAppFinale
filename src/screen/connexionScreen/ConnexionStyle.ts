import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 40,
        marginVertical: 50,
        width: "80%",
        borderColor: "lightgray",
        borderWidth: 3,
        height: 150,
        borderRadius: 20,
    },
    connexionContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    welcome: {
        backgroundColor: "#ffc107",
        color: "white",
    },
    touch: {
        marginHorizontal: 50,
        backgroundColor: "#ffc107",
        width: 300,
        borderRadius: 10,
    },
    continue: {
        margin: 30,
        textAlign: "center",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 140,
        borderRadius: 70,
    },
    register: {
        color: "#ffc107",
    },
    connexionMode: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    notMember: {
        margin: 30,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    textInput: {
        borderWidth: 2,
        borderColor: "lightgray",
        marginHorizontal: 20,
        marginVertical: 30,
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 20,
        color: "black"
    },
    text: {
        marginHorizontal: 50,
        marginVertical: 30,
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 15,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    touchable: {

        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 45,
        padding: 10

    },
});
