import React from "react";

//include images into your bundle
import { Digit } from "./digit";

//create your first component
const Home = ({ digits }) => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 text-center fs-1 gap-1">
			<Digit value={<i className="fa-solid fa-clock"></i>} />
			{digits.map((digit, index) => (
				<Digit key={index} value={digit} />
			))}
		</div>
	);
};

export default Home;
