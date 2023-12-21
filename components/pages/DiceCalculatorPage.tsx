import { StyleSheet, View } from 'react-native';
import React from 'react';
import { DiceCalculator } from '../templates/DiceCalculator';

const DiceCalculatorPage = () => {
	return (
		<View style={styles.container}>
			<DiceCalculator />
		</View>
	);
};

export default DiceCalculatorPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
