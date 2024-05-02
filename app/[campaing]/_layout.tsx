import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';

const tabLayout = () => {
	const { campaing } = useLocalSearchParams();

	return (
		<Tabs screenOptions={{ headerTitle: `${campaing}` }}>
			<Tabs.Screen name="Calculator" />
			<Tabs.Screen name="CampaingLuck" />
			<Tabs.Screen name="[dice]" options={{ headerShown: false, href: null }} />
		</Tabs>
	);
};

export default tabLayout;
