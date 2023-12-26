import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';

type Props = {
	dice: string;
	onClick: () => void;
};

export function DiceButton({ dice, onClick }: Props) {
	return (
		<View style={styles.button}>
			<Button onClick={onClick}>
				<Text>{dice}</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 70,
		aspectRatio: 1 / 1,
		marginHorizontal: 10,
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
