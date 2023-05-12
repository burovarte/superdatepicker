import React, { FunctionComponent } from "react";

interface ButtonProps {
	style: string | number;
	icon: any;
	title: string;
	color: string;
	size: string;
	buttonType: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
	style,
	icon,
	title,
	color,
	size,
	buttonType,
}) => {
	return (
		<button style={{ width: "100px", background: `${color}` }}>{title}</button>
	);
};
