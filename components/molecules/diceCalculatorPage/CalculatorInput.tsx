import { View } from 'react-native';
import React from 'react';
import { OperationInput, ResultInput } from '../../atoms';

type Props = {
	operation: string;
	setOperation: React.Dispatch<React.SetStateAction<string>>;
	result: string;
};

export function CalculatorInput({ operation, setOperation, result }: Props) {
	return (
		<View>
			<OperationInput operation={operation} setOperation={setOperation} />
			<ResultInput result={result} />
		</View>
	);
}
