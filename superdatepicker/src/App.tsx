import { useState } from "react";
import refresh from "./assets/refreshing-svgrepo-com.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
	const [press, setPress] = useState(false);
	return (
		<>
			<Tooltip
				content={
					<>
						<Button
							style={""}
							icon={refresh}
							title={"Refresh"}
							color={"#006BB4"}
							size={""}
						/>
						<Button
							style={""}
							icon={refresh}
							title={"Refresh"}
							color={"#006BB4"}
							size={""}
						/>
					</>
				}
				direction="bottom"
			>
				<Button
					style={""}
					icon={refresh}
					title={"Refresh"}
					color={"#006BB4"}
					size={""}
				/>
			</Tooltip>
		</>
	);
}

export default App;
