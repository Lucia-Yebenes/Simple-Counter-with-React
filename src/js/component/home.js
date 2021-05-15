import React, { useState } from "react";
import Counter from "./counter.js";
import Button from "./button.js";

//create your first component
export function Home() {
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, d: 0, a: 0 });
	const start = () => {
		console.log("hola");
		run();
		setInterval(run, 10);
	};
	var updateMs = time.ms,
		updateS = time.s,
		updateM = time.m,
		updateH = time.h,
		updateD = time.d,
		updateA = time.a;

	const run = () => {
		if (updateD === 360) {
			updateA++;
			updateD = 0;
		}
		if (updateH === 24) {
			updateD++;
			updateH = 0;
		}
		if (updateM === 60) {
			updateH++;
			updateM = 0;
		}
		if (updateS === 60) {
			updateM++;
			updateS = 0;
		}
		if (updateMs === 100) {
			updateS++;
			updateMs = 0;
		}
		updateMs++;
		return setTime({
			ms: updateMs,
			s: updateS,
			m: updateM,
			h: updateH,
			d: updateD,
			a: updateA
		});
	};
	return (
		<div className="body">
			<div className="container">
				<div className="counter">
					<Counter time={time} />
					<Button start={start} />
				</div>
			</div>
		</div>
	);
}
