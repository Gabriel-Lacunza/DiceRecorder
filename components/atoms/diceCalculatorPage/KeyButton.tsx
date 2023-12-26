import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';

type Props = {
	char: string;
	onClick: () => void;
};

export function KeyButton({ char, onClick }: Props) {
	return (
		<View style={styles.button}>
			<Button onClick={onClick}>
				<Text style={styles.text}>{char}</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 70,
		aspectRatio: 1 / 1,
		margin: 10,
		backgroundColor: 'cyan',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
	},
});
