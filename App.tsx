import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/Routes'

export default function App() {
    return (
        <View>
            <StatusBar style='auto' />
            <Routes />
        </View>
    )
}
