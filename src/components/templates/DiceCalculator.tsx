import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { Calculator } from '../organisms';

export const DiceCalculator = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Calculator />
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
