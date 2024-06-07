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
    messageType:{
        flexDirection: "row", 
        margin: 20,
    },
    plusContainer:{
        width:50,
        marginHorizontal:30,
        height:50, 
        borderRadius:25, 
        backgroundColor:"#ffc107", 
        alignSelf:"flex-end",
    },
    plus:{
        alignSelf:"center",
        fontWeight:"bold", 
        fontSize:45,
        color:"black"
    },
    textInput: {
        backgroundColor: "lightgrey",
        opacity: 0.2,
        borderColor: "grey",
        marginHorizontal: 20,
        borderRadius: 25,
        height: 45,
        paddingLeft: 20,
        color: "black"
    },
})
export default styles;