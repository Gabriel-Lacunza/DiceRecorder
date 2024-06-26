import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
	face: number;
	count: number;
};

export const FaceRow = ({ face, count }: Props) => {
	return (
		<View style={styles.row}>
			<Text style={{ fontSize: 20 }}>{face}</Text>
			<Text style={{ fontSize: 20 }}>{count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
