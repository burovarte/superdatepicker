import React, { FunctionComponent } from "react";
import styled from "styled-components";

enum ButtonEnum {}

interface ButtonProps {
	style: string | number;
	icon: string;
	title: string;
	color: string;
	size: string;
	buttonType?: ButtonEnum;
}

const Container = styled.button`
	background: ${(props) => props.color};
	border-radius: 5px;
	width: 118px;
	height: 38px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: white;
`;

export const Button: FunctionComponent<ButtonProps> = ({
	style,
	icon,
	title,
	color,
	size,
	buttonType,
}) => {
	return (
		<Container color={color}>
			<img
				style={{ width: "16px", height: "16px", marginRight: "5px" }}
				src={icon}
			></img>
			{title}
		</Container>
	);
};
