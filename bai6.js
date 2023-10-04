import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function bai6() {
    return ( <
        view >
        <
        View style = {
            { alignItems: 'center', flex: 1 } } >
        <
        Text > < h1 > REGISTER < /h1></Text >
        <
        /View > <
        View >
        <
        TextInput placeholder = 'Name'
        style = {
            { fontSize: 18, marginLeft: 26, width: 48, } } > < /TextInput> <
        /View> <
        View style = {
            { height: 50, width: 100, backgroundColor: 'yellow' } } >
        <
        button > LOGIN < /button> <
        /View> <
        View style = {
            { height: 50, width: 100 } } >
        <
        button > SIGN UP < /button> <
        /View> <
        /view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});