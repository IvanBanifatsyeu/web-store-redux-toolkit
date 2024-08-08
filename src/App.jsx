import React from "react";
import Main from "./Components/Main/Main";
import "./App.css";
import Slider from "./Components/Slider/Slider";
import NavigateButtons from "./Components/NavigateButtons/NavigateButtons";


function App() {
	return (
		<div className="App">
			<Main />
			<Slider />
			<NavigateButtons />
		</div>
	);
}

export default App;
