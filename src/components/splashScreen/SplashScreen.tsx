import { ImageBackground, Text, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground resizeMode="cover" style={{
                flex: 1,
                justifyContent: 'center', borderRadius: 50
            }} source={require("../../assets/chatLogo.png")} />
        </View>
    )
}
export default SplashScreen