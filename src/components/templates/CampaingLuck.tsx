import { View } from 'react-native';
import React from 'react';
import { DiceRows } from '../organisms';

export const CampaingLuck = () => {
	const data = [
		{
			dice: 'D4',
			average: 2.5,
		},
		{
			dice: 'D6',
			average: 3.5,
		},
		{
			dice: 'D8',
			average: 4.5,
		},
		{
			dice: 'D10',
			average: 5.5,
		},
		{
			dice: 'D12',
			average: 6.5,
		},
		{
			dice: 'D20',
			average: 10.5,
		},
		{
			dice: 'D100',
			average: 50.5,
		},
	];
	return (
		<View>
			<DiceRows data={data} />
		</View>
	);
};
