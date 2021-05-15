import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div>
			<span>
				{props.time.a >= 10 ? props.time.a : "0" + props.time.a}
			</span>
			&nbsp;:&nbsp;
			<span>
				{props.time.d >= 10 ? props.time.d : "0" + props.time.d}
			</span>
			&nbsp;:&nbsp;
			<span>
				{props.time.h >= 10 ? props.time.h : "0" + props.time.h}
			</span>
			&nbsp;:&nbsp;
			<span>
				{props.time.m >= 10 ? props.time.m : "0" + props.time.m}
			</span>
			&nbsp;:&nbsp;
			<span>
				{props.time.s >= 10 ? props.time.s : "0" + props.time.s}
			</span>
			&nbsp;:&nbsp;
			<span>
				{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}
			</span>
			&nbsp;:&nbsp;
		</div>
	);
};

export default Counter;
