import { View, StyleSheet } from 'react-native';
import React from 'react';
import { CreateCamapaing } from '../templates/CreateCamapaing';
/*
  TODO:
  - hacer que solo pueda estar un dropdown abierto a la vez
  - minimizar el tamaño del tipo de set
  - hacer que no "salte" el dropdown de la seleccion de dados cuando seleccionas el set custom
*/

type dataProp = {
	key: number;
	value: string;
};

const CreateCampaingPage = () => {
	return (
		<View style={styles.container}>
			<CreateCamapaing />
		</View>
	);
};

export default CreateCampaingPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
