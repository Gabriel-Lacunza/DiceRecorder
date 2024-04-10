import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';

type Props = {
	text: string;
	onClick: () => void;
	color?: string;
};

export const CampaingButton = ({ text, onClick, color }: Props) => {
	return (
		<View>
			<Button
				onClick={onClick}
				style={[styles.button, color && { backgroundColor: color }]}
			>
				<Text style={styles.ButtonText}>{text}</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		// general
		backgroundColor: 'teal',
		marginVertical: 10,

		// form
		height: 60,
		borderRadius: 15,

		//content
		alignItems: 'center',
		justifyContent: 'center',
	},
	ButtonText: {
		// general
		fontSize: 30,
	},
});
