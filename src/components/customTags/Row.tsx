import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
	children: React.JSX.Element | React.JSX.Element[];
	style?: object;
};

export const Row = ({ children, style }: Props) => {
	return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});
