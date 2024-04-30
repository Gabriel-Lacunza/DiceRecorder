import { View, Dimensions } from 'react-native';
import { CartesianChart, Bar } from 'victory-native';
import React from 'react';
import { SkFont } from '@shopify/react-native-skia/lib/typescript/src/skia/types/Font/Font';

type faceInfo = {
	face: number;
	count: number;
};

type Props = {
	diceResume: faceInfo[];
	yAxis: [lowest: number, highest: number];
	font: SkFont | null | undefined;
};

export const CakeGraph = ({ diceResume, yAxis, font }: Props) => {
	return (
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
				domain={{ y: yAxis }}
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
	);
};
