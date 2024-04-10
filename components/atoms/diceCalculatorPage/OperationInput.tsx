import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Button } from '../../customTags';

type Props = {
	operation: string;
	setOperation: React.Dispatch<React.SetStateAction<string>>;
};

export function OperationInput({ operation, setOperation }: Props) {
	return (
		<View style={{}}>
			<TextInput
				editable={false}
				placeholder={operation}
				style={styles.operation}
			/>
			{operation && (
				<Button
					onClick={() => {
						setOperation('');
					}}
					style={styles.cancelButton}
				>
					<Text>X</Text>
				</Button>
			)}
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
	cancelButton: {
		position: 'absolute',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		height: 50,
		paddingEnd: 10,
	},
});
