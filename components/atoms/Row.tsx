import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
	children: React.JSX.Element;
};

const Row = ({ children }: Props) => {
	return <View style={styles.container}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});
