import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Keyboard from '../organisms/Keyboard';

const DiceCalculator = () => {
	return (
		<View style={styles.container}>
			<Text>DiceCalculator</Text>
			<Keyboard />
		</View>
	);
};

export default DiceCalculator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
