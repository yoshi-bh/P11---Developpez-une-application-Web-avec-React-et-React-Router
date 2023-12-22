import { useState } from "react";
import "../../styles/Dropdown.scss";

function Dropdown({ title, children, menuWidth }) {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div >
		{/* style={menuWidth ? { width: menuWidth, margin: 0 } : undefined} */}
			<div
				className="dropdown-button"
				style={menuWidth ? { width: menuWidth, margin: 0 } : undefined}
			>
				<p>{title}</p>
				<div onClick={() => setIsOpened(!isOpened)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						onClick={() => setIsOpened(!isOpened)}
						className={isOpened ? "opened" : undefined}
					>
						<path
							d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			{isOpened && (
				<div
					className="dropdown"
					style={menuWidth ? { width: menuWidth, margin: 0 } : undefined}
				>
					{children}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
