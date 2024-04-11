import { View, Text, StyleSheet } from 'react-native';
import { Pie, PolarChart } from 'victory-native';
import React from 'react';

type faceInfo = {
	face: number;
	count: number;
	color: string;
};

type Props = {
	dice: string;
	diceResume: faceInfo[];
	average: number;
};

export const CampaingLuck = ({ dice, diceResume, average }: Props) => {
	return (
		<View
			style={{
				height: '40%',
			}}
		>
			<Text>{dice}</Text>
			<PolarChart
				data={diceResume}
				labelKey={'face'}
				valueKey={'count'}
				colorKey={'color'}
			>
				<Pie.Chart />
			</PolarChart>
			<Text>average: {average}</Text>
			{diceResume.map((face) => (
				<Text key={face.face}>
					{face.face}: {face.count}
				</Text>
			))}
		</View>
	);
};
