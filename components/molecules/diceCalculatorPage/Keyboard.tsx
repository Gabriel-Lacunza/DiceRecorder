import { StyleSheet, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Row } from '../../customTags';
import { KeyButton } from '../../atoms';

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
					<KeyButton char="1" onClick={() => setOperation(operation + '1')} />
					<KeyButton char="2" onClick={() => setOperation(operation + '2')} />
					<KeyButton char="3" onClick={() => setOperation(operation + '3')} />
					<KeyButton char="+" onClick={() => setOperation(operation + '+')} />
				</>
			</Row>
			<Row>
				<>
					<KeyButton char="4" onClick={() => setOperation(operation + '4')} />
					<KeyButton char="5" onClick={() => setOperation(operation + '5')} />
					<KeyButton char="6" onClick={() => setOperation(operation + '6')} />
					<KeyButton char="-" onClick={() => setOperation(operation + '-')} />
				</>
			</Row>
			<Row>
				<>
					<KeyButton char="7" onClick={() => setOperation(operation + '7')} />
					<KeyButton char="8" onClick={() => setOperation(operation + '8')} />
					<KeyButton char="9" onClick={() => setOperation(operation + '9')} />
					<KeyButton char="*" onClick={() => setOperation(operation + '*')} />
				</>
			</Row>
			<Row>
				<>
					<KeyButton char="=" onClick={() => setResult(`${eval(operation)}`)} />
					<KeyButton char="0" onClick={() => setOperation(operation + '0')} />
					<KeyButton
						char={open ? '(' : ')'}
						onClick={() => handleParenthesis()}
					/>
					<KeyButton char="/" onClick={() => setOperation(operation + '/')} />
				</>
			</Row>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
	},
});
