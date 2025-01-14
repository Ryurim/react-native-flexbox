import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlexDirectionBasics from './src/components/FlexDirectionBasics';
import JustifyContentBasics from './src/components/JustifyContentBasics';
import AlignItemsLayout from './src/components/AlignItemsLayout';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <FlexDirectionBasics /> */}
            {/* <JustifyContentBasics /> */}
            <AlignItemsLayout />
        </SafeAreaView>
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
