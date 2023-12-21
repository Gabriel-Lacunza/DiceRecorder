import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
	children: React.JSX.Element;
};

export const Row = ({ children }: Props) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});
