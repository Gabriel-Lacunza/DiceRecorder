import { View, Text } from 'react-native';
import React from 'react';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { DiceLuck } from '@Templates/DiceLuck';

const DiceSLuck = () => {
	const dice = 'D4';
	const DATA = [
		{
			face: 1,
			count: 2,
		},
		{
			face: 2,
			count: 6,
		},
		{
			face: 3,
			count: 2,
		},
		{
			face: 4,
			count: 2,
		},
	];

	return <DiceLuck dice={dice} diceResume={DATA} />;
};

export default DiceSLuck;
