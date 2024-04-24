import { View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Keyboard, DiceList, CalculatorInput } from '../../molecules';
import Dice from '../../../models/Dice';

export const Calculator = () => {
	const [operation, setOperation] = useState<string>('');
	const [result, setResult] = useState<string>('');
	const dice = new Dice();

	/* TODO:
		arreglar el corregir la suma ([2,2] => 4, no error)
		agregar keep higher o lower X
	*/

	const handleResult = useCallback(() => {
		if (operation.includes('D')) {
			const list = operation.split(' ');
			const rolled: string[] = [];
			const detailed: string[] = [];

			for (const element of list) {
				if (element.includes('D')) {
					const diceRoll = dice.roll(element);
					rolled.push(`${diceRoll.total}`);
					detailed.push(`[${diceRoll.throws}]`);
				} else {
					rolled.push(element);
					detailed.push(element);
				}
			}

			setOperation(detailed.join(' '));
			setResult(`${eval(rolled.join(' '))}`);
		} else {
			setResult(`${eval(operation)}`);
		}
	}, [operation, setOperation, setResult]);

	return (
		<View>
			<CalculatorInput
				operation={operation}
				setOperation={setOperation}
				result={result}
			/>
			<DiceList operation={operation} setOperation={setOperation} />
			<Keyboard
				operation={operation}
				setOperation={setOperation}
				handleResult={handleResult}
			/>
		</View>
	);
};
