import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor:"white"
    },
    flatList: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal:20,
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginRight: 5,
    },
    envoyerButton:{
        backgroundColor:"#ffc107",
        color:"white",
        fontWeight:"bold",
        borderColor:"black",
        textAlign:"center",
        fontSize:15,
        borderRadius:25,
        width:50,
        height:50,
        paddingVertical:15
    },
})
export default styles;