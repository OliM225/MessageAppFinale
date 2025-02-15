import MessageModel from "../Models/MessageModel";
import Room from "../Models/RoomModel";
import utilisateur from "../Models/Utilisateur";
export const usersData = <utilisateur[]>[
    { id: 1, name: "oli" },
    { id: 2, name: "yann" },
    { id: 3, name: "dousey" },
    { id: 4, name: "cheick" },
    { id: 5, name: "drogba" },
    { id: 6, name: "Kylian" },
    { id: 7, name: "Roberto" },
    { id: 8, name: "DeBrune" },
    { id: 9, name: "Foden" },
    { id: 10, name: "Messi" },
    { id: 11, name: "Test" },

]
export const usersMessages = <MessageModel[]>[
    { id: 1, senderId: 5, receiverId: 1, text: "hello", roomId: 1, date: new Date().toDateString() },
    { id: 2, senderId: 5, receiverId: 2, text: "hello", roomId: 2, date: new Date().toDateString() },
    { id: 3, senderId: 1, receiverId: 3, text: "diff", roomId: 3, date: new Date().toDateString() },
    { id: 4, senderId: 1, receiverId: 4, text: "voir", roomId: 4, date: new Date().toDateString() },
]
export const chatRooms = <Room[]>[
    { id: 1, name: "chat1", user1: 1, user2: 3 },
    { id: 2, name: "chat2", user1: 2, user2: 6 },
    { id: 3, name: "chat3", user1: 3, user2: 1 },
    { id: 4, name: "chat4", user1: 4, user2: 9 },
]