import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { CampaingSelection } from '../templates/CampaingSelection';

const CampaingSelectionPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<CampaingSelection />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});

export default CampaingSelectionPage;
