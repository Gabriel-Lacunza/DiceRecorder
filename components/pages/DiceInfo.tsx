import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

/*
	TODO:
	-que diga el tipo de dado
	- agregar resumen inicial
		- promedio
		- graficos
*/

const DiceInfo = () => {
	const data = [
		{ face: 1, count: 2 },
		{ face: 2, count: 2 },
		{ face: 3, count: 2 },
		{ face: 4, count: 2 },
	];
	return (
		<View style={styles.container}>
			<Text>DiceInfo</Text>
			{data.map((face) => (
				<Text key={face.face}>
					{face.face}: {face.count}
				</Text>
			))}
		</View>
	);
};

export default DiceInfo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
