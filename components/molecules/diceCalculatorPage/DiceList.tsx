import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';

/*
TODO:
MAKE DICE BUTTON ATOM
*/

export function DiceList() {
	const dices = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];
	return (
		<View style={styles.container}>
			<FlatList
				data={dices}
				renderItem={({ item }) => (
					<Button onClick={() => console.log(item)} style={styles.button}>
						<Text>{item}</Text>
					</Button>
				)}
				keyExtractor={(index) => index}
				horizontal
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		width: Dimensions.get('screen').width - 50,
	},
	button: {
		width: 70,
		aspectRatio: 1 / 1,
		marginHorizontal: 10,
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
