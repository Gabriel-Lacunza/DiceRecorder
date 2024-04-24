import { View } from 'react-native';
import React from 'react';
import { DiceRow } from '../../molecules';

type dice = {
	dice: string;
	average: number;
};

type Props = {
	data: dice[];
};

export const DiceRows = ({ data }: Props) => {
	return (
		<View>
			{data.map((dice, index) => (
				<View key={index}>
					<DiceRow identifer={index} average={dice.average} dice={dice.dice} />
				</View>
			))}
		</View>
	);
};
