import { SafeAreaView, StyleSheet } from 'react-native';
import { CampaingLuck } from '../templates/CampaingLuck';
import React from 'react';

export const CampaingLuckPage = () => {
	const dice = 'D4';
	const DATA = [
		{
			face: 1,
			count: 2,
		},
		{
			face: 2,
			count: 6,
		},
		{
			face: 3,
			count: 2,
		},
		{
			face: 4,
			count: 2,
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<CampaingLuck dice={dice} diceResume={DATA} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});
