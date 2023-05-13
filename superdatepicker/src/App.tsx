import { useState } from "react";
import refresh from "./assets/refreshing-svgrepo-com.svg";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
	return (
		<Button
			style={""}
			icon={refresh}
			title={"Refresh"}
			color={"#006BB4"}
			size={""}
		/>
	);
}

export default App;
