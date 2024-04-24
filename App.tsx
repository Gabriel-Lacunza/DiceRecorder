import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { CampaingLuckPage } from './components/pages/CampaingLuckPage';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<CampaingLuckPage />
		</SafeAreaView>
	);
}
