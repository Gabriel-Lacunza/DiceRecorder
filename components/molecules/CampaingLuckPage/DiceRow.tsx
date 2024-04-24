import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Row } from '../../customTags';
import { Button } from '../../customTags';

type Props = {
	identifer: number;
	dice: string;
	average: number;
};

export const DiceRow = ({ identifer, dice, average }: Props) => {
	return (
		<View>
			<Row
				key={identifer}
				style={[styles.row, { backgroundColor: identifer % 2 == 0 && 'grey' }]}
			>
				<Text style={styles.text}>{dice}</Text>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Text style={styles.text}>{average}</Text>
					<Button
						onClick={() => {
							console.log(dice);
						}}
						style={styles.button}
					>
						<Text style={{ fontSize: 20 }}>I</Text>
					</Button>
				</Row>
			</Row>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		justifyContent: 'space-between',
		padding: 10,
	},
	text: {
		fontSize: 30,
		marginEnd: 10,
	},
	button: {
		backgroundColor: 'cyan',
		padding: 5,
		aspectRatio: 1 / 1,
		alignItems: 'center',
		borderRadius: 10,
	},
});
