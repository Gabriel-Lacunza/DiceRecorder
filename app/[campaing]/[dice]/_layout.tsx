import { View, Text } from 'react-native';
import React from 'react';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Button } from 'src/components/customTags';

const DiceLayout = () => {
	const { dice } = useLocalSearchParams();

	return (
		<Stack>
			<Stack.Screen
				name="DiceLuck"
				options={{
					headerTitle: `${dice}`,
					headerLeft: () => (
						<Button onClick={() => router.back()}>
							<Text>go back</Text>
						</Button>
					),
				}}
			/>
		</Stack>
	);
};

export default DiceLayout;
