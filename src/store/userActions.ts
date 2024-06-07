import { LOGIN, LOGOUT, CHANGE_NAME, CHANGE_CHAT_ROOM_USER,
GET_USER_USERS, GET_MESSAGES, 
INSERT_NEW_MESSAGE,
SET_USER_CONNECTED_ID,
SET_RECEIVER_ID,
GET_USER_ROOMS,
SET_CHOSEN_ROOM_ID,
INSERT_NEW_USER} from "./types"
import { Dispatch } from "redux"
import utilisateur from "../Models/Utilisateur"
import { chatRooms, usersData, usersMessages } from "../data/usersData"
import MessageModel from "../Models/MessageModel"
import Room from "../Models/RoomModel"

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const changeNameAction = (username: string) => {
    return {
        type: CHANGE_NAME,
        payload: username,
    }
}

export const changeChatRoomUser = (name:string) =>{
    return {
        type: CHANGE_CHAT_ROOM_USER,
        payload:name
    }
}
export const getUserUsers = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:utilisateur[] = usersData
            dispatch({
                type:GET_USER_USERS,
                payload:data

            })
        }catch(err){

        }
    }
}

export const getMessages = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:MessageModel[] = usersMessages
            dispatch({
                type:GET_MESSAGES,
                payload:data

            })
        }catch(err){

        }
    }
}

export const getChatRooms = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:Room[] = chatRooms
            dispatch({
                type:GET_USER_ROOMS,
                payload:data

            })
        }catch(err){

        }
    }
}

export const insertNewMessage = (msg:MessageModel[]) =>{
    return {
        type:INSERT_NEW_MESSAGE,
        payload:msg,
    }
}

export const insertNewUser = (user:utilisateur[]) =>{
    return{
        type:INSERT_NEW_USER,
        payload:user,
    }
}

export const setUserConnectedId = (id:number) => {
    return {
        type: SET_USER_CONNECTED_ID,
        payload: id,
    }
}
export const setUserReceiverId = (id:number) => {
    return {
        type: SET_RECEIVER_ID,
        payload: id,
    }
}
export const setChosenRoomId = (id:number) => {
    return {
        type: SET_CHOSEN_ROOM_ID,
        payload: id,
    }
}