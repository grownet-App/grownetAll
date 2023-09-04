
import { View, Text, StyleSheet, Dimensions, Image, Button, SafeAreaView, TouchableOpacity } from "react-native";
import { GlobalStyles } from "./styles";
import { useNavigation } from '@react-navigation/native';
const home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View>
                <TouchableOpacity style={GlobalStyles.btnSecundary} onPress={() => navigation.navigate("login")} ><Text style={GlobalStyles.textInput}>Register</Text></TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.btnWhite} onPress={() => navigation.navigate("login")} ><Text style={GlobalStyles.textBtnW}>Login</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("login")} ><Text style={GlobalStyles.linkWhite}>Terms & Conditions</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default home;