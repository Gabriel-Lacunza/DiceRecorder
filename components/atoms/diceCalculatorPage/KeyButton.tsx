import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';
import { styles } from './Styles';

type Props = {
	char: string;
	onClick: () => void;
};
export const KeyButton = ({ char, onClick }: Props) => {
	return (
		<View>
			<Button style={styles.button} onClick={onClick}>
				<Text style={styles.text}>{char}</Text>
			</Button>
		</View>
	);
};
