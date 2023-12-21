import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Button, Row } from '../../customTags';
import Dice from '../../../models/Dice';
import NumberButton from '../../atoms/diceCalculatorPage/NumberButton';

/*
TODO:
MAKE "()", OPERATORS AND NUMBERS BUTTON
*/

type Props = {
	operation: string;
	setOperation: (value: string) => void;
	setResult: (value: string) => void;
};

export const Keyboard = ({ operation, setOperation, setResult }: Props) => {
	const [open, setOpen] = useState<boolean>(true);

	const handleParenthesis = useCallback(() => {
		setOpen(!open);
		open ? setOperation(operation + '(') : setOperation(operation + ')');
	}, [open, setOpen, operation, setOperation]);

	return (
		<View style={styles.container}>
			<Row>
				<>
					<NumberButton />
					<Button
						onClick={() => setOperation(operation + '1')}
						style={styles.button}
					>
						<Text style={styles.text}>1</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '2')}
						style={styles.button}
					>
						<Text style={styles.text}>2</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '3')}
						style={styles.button}
					>
						<Text style={styles.text}>3</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + ' + ')}
						style={styles.button}
					>
						<Text style={styles.text}>+</Text>
					</Button>
				</>
			</Row>
			<Row>
				<>
					<Button
						onClick={() => setOperation(operation + '4')}
						style={styles.button}
					>
						<Text style={styles.text}>4</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '5')}
						style={styles.button}
					>
						<Text style={styles.text}>5</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '6')}
						style={styles.button}
					>
						<Text style={styles.text}>6</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + ' - ')}
						style={styles.button}
					>
						<Text style={styles.text}>-</Text>
					</Button>
				</>
			</Row>
			<Row>
				<>
					<Button
						onClick={() => setOperation(operation + '7')}
						style={styles.button}
					>
						<Text style={styles.text}>7</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '8')}
						style={styles.button}
					>
						<Text style={styles.text}>8</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '9')}
						style={styles.button}
					>
						<Text style={styles.text}>9</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + ' * ')}
						style={styles.button}
					>
						<Text style={styles.text}>*</Text>
					</Button>
				</>
			</Row>
			<Row>
				<>
					<Button
						onClick={() => setResult(`${eval(operation)}`)}
						style={styles.button}
					>
						<Text style={styles.text}>=</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + '0')}
						style={styles.button}
					>
						<Text style={styles.text}>0</Text>
					</Button>
					<Button onClick={() => handleParenthesis()} style={styles.button}>
						<Text style={styles.text}>{open ? '(' : ')'}</Text>
					</Button>
					<Button
						onClick={() => setOperation(operation + ' / ')}
						style={styles.button}
					>
						<Text style={styles.text}>/</Text>
					</Button>
				</>
			</Row>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
	},
	button: {
		width: 70,
		aspectRatio: 1 / 1,
		margin: 10,
		backgroundColor: 'cyan',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
	},
});
