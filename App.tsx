import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import DiceInfo from './components/pages/DiceInfo';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<DiceInfo />
		</SafeAreaView>
	);
}
