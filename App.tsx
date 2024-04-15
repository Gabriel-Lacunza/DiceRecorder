import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { DiceLuckPage } from './components/pages/DiceLuckPage';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<DiceLuckPage />
		</SafeAreaView>
	);
}
