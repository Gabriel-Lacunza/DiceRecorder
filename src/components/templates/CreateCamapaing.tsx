import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button } from '../customTags';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { SelectDiceSet } from '../organisms';
import { router } from 'expo-router';
/*
  TODO:
  - minimizar el tamaño del tipo de set (que se vea la mitad de un elemento)
  - hacer que no "salte" el dropdown de la seleccion de dados cuando seleccionas el set custom
*/

type dataProp = {
	key: number;
	value: string;
};

export const CreateCamapaing = () => {
	const [name, setName] = useState<string>('');
	const [set, setSet] = useState('');
	const [diceList, setDiceList] = useState<any>([]);
	const [msg, setMsg] = useState('');

	const setData = [
		{
			key: 1,
			value: 'Standar',
			msg: 'haz seleccionado el set "estandar", este set consiste del D4, D6, D8, D10, D12 y del D20!',
		},
		{
			key: 2,
			value: 'Complete',
			msg: 'haz seleccionado el set "completo", este set consiste del D2, D3, D4, D6, D8, D10, D12, D20 y del D100!',
		},
		{
			key: 3,
			value: 'Custom',
			msg: 'Haz escogido crear tu pripio set para esta campaña!, ahora y en el futuro podrás agregar dados a medida que lo necesites!',
		},
	];

	const diceOptions: dataProp[] = [
		{ key: 1, value: 'D2' },
		{ key: 2, value: 'D3' },
		{ key: 3, value: 'D4' },
		{ key: 4, value: 'D6' },
		{ key: 5, value: 'D8' },
		{ key: 6, value: 'D10' },
		{ key: 7, value: 'D12' },
		{ key: 8, value: 'D20' },
		{ key: 9, value: 'D100' },
	];
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Campaing name"
				value={name}
				onChangeText={setName}
				style={[styles.text, { marginBottom: 15 }]}
			/>
			<SelectDiceSet
				msg={msg}
				onChange={(value: any) => {
					setSet(value.value);
					setMsg(value.msg);
				}}
				placeholder={set}
				setData={setData}
			/>
			<MultiSelect
				data={diceOptions}
				labelField="value"
				valueField="key"
				value={diceList}
				onChange={(item) => {
					setDiceList(item);
				}}
				style={{ width: '90%', marginVertical: 30 }}
				visibleSelectedItem={false}
				disable={!(set === 'Custom')}
			/>
			<Button
				onClick={() => {
					console.log(name);
				}}
				style={{
					width: '90%',
					backgroundColor: 'cyan',
					height: 45,
					borderRadius: 10,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text style={styles.text}>Create</Text>
			</Button>
			<Button
				onClick={() => {
					router.back();
				}}
				style={{
					width: '90%',
					backgroundColor: 'red',
					height: 45,
					borderRadius: 10,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 30,
				}}
			>
				<Text style={styles.text}>Cancel</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	text: {
		fontSize: 30,
	},
});
