import { View } from 'react-native';
import React from 'react';
import { FaceRow } from '../../molecules/CampaingLuckPage/FaceRow';

type faceInfo = {
	face: number;
	count: number;
};

type Props = {
	diceResume: faceInfo[];
};

export const FaceRows = ({ diceResume }: Props) => {
	return (
		<View>
			{diceResume.map((face, index) => (
				<View
					key={face.face}
					style={{
						backgroundColor: index % 2 == 0 ? 'gray' : 'white',
					}}
				>
					<FaceRow face={face.face} count={face.count} />
				</View>
			))}
		</View>
	);
};
