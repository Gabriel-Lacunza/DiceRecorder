import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CampaingButtons } from '../molecules';
import { CampaingButton } from '../atoms';
import { router } from 'expo-router';

export const CampaingSelection = () => {
	const data: string[] = ['hello', 'bye', 'potato'];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Select your campaing!</Text>
			<View style={styles.buttonContainer}>
				<CampaingButtons data={data} />
				<CampaingButton
					onClick={() => router.push('/CreateCampaing')}
					text={'New Campaing'}
					color={'tomato'}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 50,
	},
	button: {
		// general
		marginVertical: 10,

		// form
		height: 60,
		borderRadius: 15,

		//content
		alignItems: 'center',
		justifyContent: 'center',
	},
	ButtonText: {
		// general
		fontSize: 30,
	},
	buttonContainer: {
		width: '80%',
	},
});
