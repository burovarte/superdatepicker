import React, { useState } from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
	display: inline-block;
	position: relative;
`;

const TooltipTip = styled.div`
	position: absolute;
	border-radius: 4px;
	left: 50%;
	transform: translateX(-50%);
	padding: 6px;
	color: var(--tooltip-text-color);
	background: var(--tooltip-background-color);
	font-size: 14px;
	font-family: sans-serif;
	line-height: 1;
	z-index: 100;
	white-space: nowrap;
	margin-top: 30px;
	background-color: aliceblue;
	width: auto;
	height: auto;
`;

const Tooltip = (props: any) => {
	let timeout: any;
	const [active, setActive] = useState(false);

	const showTip = () => {
		active === true ? setActive(false) : setActive(true);
	};

	return (
		<TooltipWrapper onClick={showTip}>
			{props.children}
			{active && (
				<TooltipTip className={`Tooltip-Tip ${props.direction}`}>
					{props.content}
				</TooltipTip>
			)}
		</TooltipWrapper>
	);
};

export default Tooltip;
