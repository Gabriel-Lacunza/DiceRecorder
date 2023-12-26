import { View } from 'react-native';
import React, { useState } from 'react';
import { Keyboard, DiceList, CalculatorInput } from '../molecules';

export function Calculator() {
	const [operation, setOperation] = useState<string>('');
	const [result, setResult] = useState<string>('');

	return (
		<View>
			<CalculatorInput operation={operation} result={result} />
			<DiceList />
			<Keyboard
				operation={operation}
				setOperation={setOperation}
				setResult={setResult}
			/>
		</View>
	);
}
