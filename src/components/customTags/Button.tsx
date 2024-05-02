import { Pressable } from 'react-native';
import React from 'react';

type Props = {
	children: React.JSX.Element;
	onClick: () => void;
	style?: object;
};

export const Button = ({ children, onClick = () => {}, style }: Props) => {
	return (
		<Pressable onPress={onClick} style={style}>
			{children}
		</Pressable>
	);
};
