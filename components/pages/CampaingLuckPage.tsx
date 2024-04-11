import { View, Text, StyleSheet } from 'react-native';
import { Pie, PolarChart } from 'victory-native';
import { CampaingLuck } from '../templates/CampaingLuck';
import React from 'react';

export const CampaingLuckPage = () => {
	const dice = 'D4';
	const average = 2.5;
	const DATA = [
		{
			face: 1,
			count: 3,
			color: '#003C43',
		},
		{
			face: 2,
			count: 3,
			color: '#135D66',
		},
		{
			face: 3,
			count: 3,
			color: '#77B0AA',
		},
		{
			face: 4,
			count: 3,
			color: '#E3FEF7',
		},
	];

	return (
		<View style={styles.container}>
			<CampaingLuck average={average} dice={dice} diceResume={DATA} />
		</View>
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
