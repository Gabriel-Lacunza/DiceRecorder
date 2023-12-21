import { View, StyleSheet } from 'react-native';
import React from 'react';
import { CampaingButton } from '..';

type Props = {
	data: string[];
};

export const CampaingButtons = ({ data }: Props) => {
	return (
		<View>
			{data.map((campaing) => (
				<CampaingButton
					onClick={() => console.log(campaing)}
					text={campaing}
					key={campaing}
				/>
			))}
		</View>
	);
};
