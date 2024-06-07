import { createStackNavigator } from "@react-navigation/stack";
import Connexion from "../screen/connexionScreen/Connexion";
import UserListScreen from "../screen/userListScreen/UserListScreen";
import ChatRoomScreen from "../screen/chatRoomScreen/ChatRoomScreen";
import AjoutInterlocuteur from "../screen/ajoutInterlocuteur/AjoutInterlocuteur";
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connexion" options={{ headerShown:false }} component={Connexion} />
      <Stack.Screen name="Users" component={UserListScreen} options={{ headerShown:false }} />
      <Stack.Screen name="Chat" component={ChatRoomScreen} />
      <Stack.Screen name="Ajout" component={AjoutInterlocuteur} options={{ headerShown:false }} />
    </Stack.Navigator>
  );
}