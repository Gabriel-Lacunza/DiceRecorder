import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Pie, PolarChart, CartesianChart, Bar } from 'victory-native';
import React, { useEffect, useState } from 'react';
import { useFont } from '@shopify/react-native-skia';
import InterVariable from '../../assets/fonts/InterVariable.ttf';
import { FaceRows } from '../organisms/CampaingLuckPage/FaceRows';

type faceInfo = {
	face: number;
	count: number;
};

type Props = {
	dice: string;
	diceResume: faceInfo[];
};

export const DiceLuck = ({ dice, diceResume }: Props) => {
	const font = useFont(InterVariable, 20);
	const [lowest, setLowest] = useState<number>(Infinity);
	const [highest, setHighest] = useState<number>(0);
	const [average, setAverage] = useState<number>(0);

	useEffect(() => {
		let total = 0;
		let rounds = 0;
		let l = Infinity;
		let h = 0;

		diceResume.forEach((face) => {
			total += face.face * face.count;
			rounds += face.count;

			if (face.count < l) {
				l = face.count - 1;
			}

			if (face.count > h) {
				h = face.count + 1;
			}
		});

		setLowest(l);
		setHighest(h);
		setAverage(Math.round(parseFloat(`${total / rounds}`) * 1000) / 1000);
	}, [lowest, highest]);

	return (
		<View
			style={{
				flex: 1,
				paddingHorizontal: 5,
			}}
		>
			<View style={{ flex: 1 }}>
				{/* title */}
				<Text
					style={{
						marginVertical: 20,
						fontSize: 30,
					}}
				>
					{dice}
				</Text>

				{/* graph */}
				<View
					style={{
						width: Dimensions.get('window').width * 0.9,
						flex: 1,
						alignSelf: 'center',
					}}
				>
					<CartesianChart
						data={diceResume}
						xKey={'face'}
						yKeys={['count']}
						domain={{ y: [lowest, highest] }}
						domainPadding={{ left: 70, right: 70 }}
						axisOptions={{
							font,
						}}
					>
						{({ points, chartBounds }) => (
							<Bar chartBounds={chartBounds} points={points.count} />
						)}
					</CartesianChart>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				{/* average */}
				<Text
					style={{ fontSize: 20, paddingVertical: 10, alignSelf: 'center' }}
				>
					average: {average}
				</Text>

				<FaceRows diceResume={diceResume} />
			</View>
		</View>
	);
};
