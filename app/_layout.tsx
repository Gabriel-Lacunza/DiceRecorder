import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const mainLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="CreateCampaing" options={{ headerShown: true }} />
			<Stack.Screen name="[campaing]" />
		</Stack>
	);
};

export default mainLayout;
