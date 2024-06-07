import { LOGIN, LOGOUT, CHANGE_NAME,
         CHANGE_CHAT_ROOM_USER, GET_USER_USERS, GET_MESSAGES,
         INSERT_NEW_MESSAGE, SET_USER_CONNECTED_ID, 
         SET_RECEIVER_ID, GET_USER_ROOMS, SET_CHOSEN_ROOM_ID, 
         INSERT_NEW_USER} from "./types";
import utilisateur from "../Models/Utilisateur";
import Room from "../Models/RoomModel";
import MessageModel from "../Models/MessageModel";
import ActionModel from "../Models/ActionModel";
const initialState = {
    isSignedIn:false,
    username: "Test",
    userConnectedId:0,
    roomChosenId:0,
    userReceiverId:0,
    userBooks: [],
    usersList:<utilisateur[]>[],
    chatRoom:<Room[]>[],
    sentMessage:<MessageModel[]>[]
}
export default (state = initialState, {type, payload}:ActionModel) => {

    switch(type){
        case LOGIN:
            return {...state, isSignedIn:payload}
        case LOGOUT:
            return {...state, isSignedIn:payload}
        case CHANGE_NAME:
            return {...state, username:payload}
        case CHANGE_CHAT_ROOM_USER:
            return {...state, chatRoom:payload}
        case GET_USER_USERS:
            return {...state, usersList:payload}
        case GET_MESSAGES:
            return {...state, sentMessage:payload}
        case GET_USER_ROOMS:
            return {...state, chatRoom:payload}
        case INSERT_NEW_MESSAGE:
            return {...state, sentMessage:payload}
        case INSERT_NEW_USER:
            return {...state,usersList:payload}
        case SET_USER_CONNECTED_ID:
            return {...state, userConnectedId:payload}
        case SET_RECEIVER_ID:
            return {...state, userReceiverId:payload}
        case SET_CHOSEN_ROOM_ID:
            return {...state, roomChosenId:payload}
    }
    return state
}