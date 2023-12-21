import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import DiceCalculatorPage from './components/pages/DiceCalculatorPage';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<DiceCalculatorPage />
		</SafeAreaView>
	);
}
