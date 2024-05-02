import { View } from 'react-native';
import React from 'react';
import { CampaingButton } from '../../atoms';
import { router } from 'expo-router';

type Props = {
	data: string[];
};

export const CampaingButtons = ({ data }: Props) => {
	return (
		<View>
			{data.map((campaing) => (
				<CampaingButton
					onClick={() =>
						router.push({
							pathname: '/[campaing]',
							params: { campaing: campaing },
						})
					}
					text={campaing}
					key={campaing}
				/>
			))}
		</View>
	);
};
