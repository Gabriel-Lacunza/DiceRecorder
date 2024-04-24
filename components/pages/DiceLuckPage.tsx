import { SafeAreaView, StyleSheet } from 'react-native';
import { DiceLuck } from '../templates/DiceLuck';
import React from 'react';

const DiceLuckPage = () => {
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
			<DiceLuck dice={dice} diceResume={DATA} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default DiceLuckPage;
