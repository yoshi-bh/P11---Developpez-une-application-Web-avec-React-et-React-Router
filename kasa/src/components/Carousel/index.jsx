import { useState } from "react";
import "../../styles/Carousel.scss";

function Carousel({ imgs }) {
	let [index, setIndex] = useState(0);

	const calcIndex = (nb) => {
		const newIndex = index + nb;
		if (newIndex >= 0) return newIndex % imgs.length;
		else return newIndex + imgs.length;
	};

	return (
		<div className="carousel">
			<img className="centered" src={imgs[index]} alt="" />
			{imgs.length > 1 ? (
				<div>
					<svg
						className="arrow-btn left"
						xmlns="http://www.w3.org/2000/svg"
						width="5rem"
						height="5rem"
						viewBox="0 0 32 32"
						fill="none"
						onClick={() => setIndex(calcIndex(-1))}
					>
						<path
							d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z"
							fill="white"
						/>
					</svg>
					<svg
						className="arrow-btn right"
						xmlns="http://www.w3.org/2000/svg"
						width="5rem"
						height="5rem"
						viewBox="0 0 32 32"
						fill="none"
						onClick={() => setIndex(calcIndex(1))}
					>
						<path
							d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z"
							fill="white"
						/>
					</svg>
				</div>
			) : null}
			<h2>
				{index + 1}/{imgs.length}
			</h2>
		</div>
	);
}

export default Carousel;
