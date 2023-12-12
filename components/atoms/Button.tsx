import { Pressable, Text } from 'react-native';
import React from 'react';

type Props = {
	children: React.JSX.Element;
	onClick: () => void;
	style?: object;
};

const Button = ({ children, onClick = () => {}, style }: Props) => {
	return (
		<Pressable onPress={onClick} style={style}>
			{children}
		</Pressable>
	);
};

export default Button;
