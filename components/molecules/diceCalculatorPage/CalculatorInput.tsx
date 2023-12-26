import { View } from 'react-native';
import React from 'react';
import { OperationInput, ResultInput } from '../../atoms';

type Props = {
	operation: string;
	result: string;
};

export function CalculatorInput({ operation, result }: Props) {
	return (
		<View>
			<OperationInput operation={operation} />
			<ResultInput result={result} />
		</View>
	);
}
