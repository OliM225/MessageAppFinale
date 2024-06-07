import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./ConnexionStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeNameAction, loginAction, setUserConnectedId } from "../../store/userActions";
import { RootState } from "../../store/store";
import ConnexionMode from "../../components/connexionMode/ConnexionMode";

const Connexion = ({ navigation }: any) => {
    const { username, usersList } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    return (
        <View style={styles.connexionContainer}>
            <Text style={styles.text}>Welcome to <Text style={styles.welcome}>WeChat</Text></Text>
            <View>
                <Image style={styles.image} source={require("../../assets/chatLogo.png")} />
            </View>
            <View >
                <TextInput
                    style={styles.textInput}
                    placeholder="Username..."
                    value={username}
                    onChangeText={(txt) => dispatch(changeNameAction(txt))}
                />
                <View>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => username === "" ? <Connexion /> : (navigation.navigate("Users"), dispatch(loginAction()), usersList.map((e) => e.name === username ? dispatch(setUserConnectedId(e.id)) : 0))}>
                        <Text style={styles.touchable}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.continue}> Or continue with</Text>
                </View>
            </View>
            <View style={styles.connexionMode}>
                <ConnexionMode source={require("../../assets/google.png")} />
                <ConnexionMode source={require("../../assets/apple.png")} />
                <ConnexionMode source={require("../../assets/facebook.png")} />
            </View>
            <View>
                <Text style={styles.notMember}> Not a member ? <Text style={styles.register}>Register now</Text></Text>
            </View>
        </View>)
}
export default Connexion;