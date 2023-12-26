import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { DiceButton } from '../../atoms';

type Props = {
	operation: string;
	setOperation: (value: string) => void;
};

export function DiceList({ operation, setOperation }: Props) {
	const dices = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];
	return (
		<View style={styles.container}>
			<FlatList
				data={dices}
				renderItem={({ item }) => (
					<DiceButton
						dice={item}
						onClick={() => setOperation(operation + item)}
					/>
				)}
				keyExtractor={(index) => index}
				horizontal
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 90,
		width: Dimensions.get('screen').width - 50,
	},
});
