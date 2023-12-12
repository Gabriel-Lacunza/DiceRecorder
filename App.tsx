import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import DiceCalculator from './components/templates/DiceCalculator';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<DiceCalculator />
		</SafeAreaView>
	);
}
