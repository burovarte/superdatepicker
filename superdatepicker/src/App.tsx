import React, { useState } from "react";
import refresh from "./assets/refreshing-svgrepo-com.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";
import { DateInput } from "./components/DateInput/DateInput";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

function App() {
	const [press, setPress] = useState(false);
	const [startDate, setStartDate] = React.useState<Dayjs | null>(
		dayjs("2022-04-17")
	);
	const [endDate, setEndDate] = React.useState<Dayjs | null>(
		dayjs("2022-04-17")
	);
	return (
		<>
			{console.log(startDate?.format("DD/MM/YYYY"))}
			<Tooltip
				content={
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateCalendar
							value={startDate}
							onChange={(newValue) => setStartDate(newValue)}
						/>
					</LocalizationProvider>
				}
				direction="bottom"
			>
				<DateInput date={startDate?.format("DD/MM/YYYY")} />
			</Tooltip>
			<ArrowForwardIcon />
			<Tooltip
				content={
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateCalendar
							value={endDate}
							onChange={(newValue) => setEndDate(newValue)}
						/>
					</LocalizationProvider>
				}
				direction="bottom"
			>
				<DateInput date={endDate?.format("DD/MM/YYYY")} />
			</Tooltip>
			<Button
				style={""}
				icon={refresh}
				title={"Refresh"}
				color={"#006BB4"}
				size={""}
			/>
		</>
	);
}

export default App;
