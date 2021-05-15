import React from "react";

const Button = props => {
	return (
		<div>
			<button className="btn" onClick={props.start}>
				Start
			</button>
		</div>
	);
};

export default Button;
