import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

type data = {
	key: number;
	value: string;
	msg: string;
};

type Prop = {
	setData: data[];
	onChange: (value: any) => void;
	placeholder: string;
	msg: string;
};

export const SelectDiceSet = ({
	setData,
	onChange,
	placeholder,
	msg,
}: Prop) => {
	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			<Dropdown
				data={setData}
				labelField="value"
				valueField="key"
				onChange={onChange}
				style={[styles.box, styles.drop]}
				placeholder={placeholder === '' ? 'Select dice set' : placeholder}
			/>

			<Text style={styles.box}>{msg}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		width: '90%',
	},
	drop: {
		marginVertical: 15,
	},
});
