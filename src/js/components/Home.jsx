import React from "react";
import SecondsCounter from "./SecondsCounter";
//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<SecondsCounter
				digitOne={props.digitOne}
				digitTwo={props.digitTwo}
				digitThree={props.digitThree}
				digitFour={props.digitFour}
				digitFive={props.digitFive}
				digitSix={props.digitSix}
			/>
		</div>
	);
};
export default Home;