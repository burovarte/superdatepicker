import React, { FunctionComponent } from "react";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";

interface DateInput {
	date: any;
}
const Container = styled.button`
	width: 215px;
	height: 38px;
	margin: 0;
	padding: 8px;
	margin: 0 5px;
`;

export const DateInput: FunctionComponent<DateInput> = (props) => {
	return (
		<>
			<Container>{props.date}</Container>
		</>
	);
};
