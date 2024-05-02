import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';
import { styles } from './Styles';

type Props = {
	dice: string;
	onClick: () => void;
};

export const DiceButton = ({ dice, onClick }: Props) => {
	const width: number = dice.length * 20 + 20;

	return (
		<View>
			<Button
				style={[styles.button, { backgroundColor: 'silver', width: width }]}
				onClick={onClick}
			>
				<Text style={styles.text}>{dice}</Text>
			</Button>
		</View>
	);
};
