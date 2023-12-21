import { View } from 'react-native';
import React, { useState } from 'react';
import { Keyboard, OperationInput, ResultInput, DiceList } from '../molecules';

export function Calculator() {
	const [operation, setOperation] = useState<string>('');
	const [result, setResult] = useState<string>('');

	return (
		<View>
			<OperationInput operation={operation} />
			<ResultInput result={result} />
			<DiceList />
			<Keyboard
				operation={operation}
				setOperation={setOperation}
				setResult={setResult}
			/>
		</View>
	);
}
