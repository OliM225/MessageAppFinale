type MessageModel = {
    id: number,
    senderId: number,
    receiverId: number,
    text: string,
    roomId: number,
    date: string,
}
export default MessageModel;