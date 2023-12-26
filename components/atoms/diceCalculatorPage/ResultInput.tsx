import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

type Props = {
	result: string;
};

export function ResultInput({ result }: Props) {
	return (
		<View>
			<TextInput editable={false} placeholder={result} style={styles.result} />
		</View>
	);
}

const styles = StyleSheet.create({
	result: {
		fontSize: 20,
		backgroundColor: 'darkgray',
		padding: 10,
		marginBottom: 10,
	},
});
