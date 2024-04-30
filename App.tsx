import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import CampaingSelectionPage from './components/pages/CampaingSelectionPage';
import CampaingLuckPage from './components/pages/CampaingLuckPage';
import DiceLuckPage from './components/pages/DiceLuckPage';
import DiceCalculatorPage from './components/pages/DiceCalculatorPage';
import CreateCampaingPage from './components/pages/CreateCampaingPage';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />
			<CreateCampaingPage />
		</SafeAreaView>
	);
}
