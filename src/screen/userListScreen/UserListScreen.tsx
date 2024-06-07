import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./UserListStyles";
import { View, FlatList, ListRenderItem, Pressable, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserUsers, setUserReceiverId, setChosenRoomId } from "../../store/userActions";
import ChatDesign from "../../components/chatDesign/ChatDesign";
import { RootState } from "../../store/store";
import utilisateur from "../../Models/Utilisateur";
import { TextInput } from "react-native-gesture-handler";
import MessageCategorie from "../../components/messageCategorie/MessageCategorie";

const UserListScreen = ({ navigation }: any) => {
    const[searchtext, setSearchText]=useState<string>("");
    const { usersList, username } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserUsers())
    }, []);
    const usersCo = usersList.filter((txt) => txt.name !== username);
    const userFilterer = usersCo.filter((texte)=>texte.name.toLowerCase().includes(searchtext.toLowerCase()))
    const renderItem: ListRenderItem<utilisateur> = ({ item }) => {

        return <ChatDesign Children={item.name} onPress={() => (dispatch(setUserReceiverId(item.id)), dispatch(setChosenRoomId(item.id)), navigation.navigate("Chat"))} />
    }
    return (
        <View style={styles.globalContainer}>
            <TextInput placeholder="Recherche..." onChangeText={(e)=>setSearchText(e)} style={styles.textInput} />
            <View style={styles.messageType}>
                <MessageCategorie>All</MessageCategorie>
                <MessageCategorie>Unread</MessageCategorie>
                <MessageCategorie>Groups</MessageCategorie>
            </View>
            <FlatList
                data={userFilterer}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={styles.plusContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Ajout")}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>   
            </View>
        </View>
    )
}
export default UserListScreen;