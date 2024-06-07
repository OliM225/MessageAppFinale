import { FlatList, KeyboardAvoidingView, ListRenderItem, Pressable, Text, View } from "react-native"
import { useState } from "react";
import Message from "../../components/Message/Message";
import styles from "./ChatRoomScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { insertNewMessage } from "../../store/userActions";
import { TextInput } from "react-native-gesture-handler";
import MessageModel from "../../Models/MessageModel";

const ChatRoomScreen = ({ navigation }: any) => {
    const [content, setContent] = useState<string>("");
    const { sentMessage } = useSelector((state: RootState) => state.userData)
    const { userConnectedId, userReceiverId, roomChosenId } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    const onSend = () => {
        dispatch(insertNewMessage([...sentMessage, { id: new Date().getTime(), senderId: userConnectedId, receiverId: userReceiverId, text: content, roomId: roomChosenId, date: new Date().toDateString() }]));
        setContent("");
    }
    const tab = sentMessage.filter((tab) => {
        return ((tab.senderId === userConnectedId || tab.senderId === userReceiverId) && (tab.receiverId === userReceiverId || tab.receiverId === userConnectedId))
    });
    const renderItem: ListRenderItem<MessageModel> = ({ item }) => {
        return <Message id={item.senderId}>{item.text}</Message>
    }
    return (
        <KeyboardAvoidingView style={styles.keyboard} >
            <FlatList
                data={tab}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.flatList}
            />
            <View style={styles.container}>
                <TextInput style={styles.input} value={content} onChangeText={setContent} placeholder="Message..." />
                <Pressable onPress={onSend}>
                    <Text style={styles.envoyerButton}>Send</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}
export default ChatRoomScreen;

