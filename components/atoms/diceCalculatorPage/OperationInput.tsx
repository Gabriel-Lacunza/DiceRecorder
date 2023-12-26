import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

type Props = {
	operation: string;
};

export function OperationInput({ operation }: Props) {
	return (
		<View>
			<TextInput
				editable={false}
				placeholder={operation}
				style={styles.operation}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	operation: {
		fontSize: 20,
		backgroundColor: 'silver',
		padding: 10,
		marginBottom: 10,
	},
});
