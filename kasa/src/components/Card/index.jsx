import { useNavigate } from "react-router-dom";
import "../../styles/Card.scss";

function Card({ id, img, title }) {
	const navigate = useNavigate();

	return (
		<div
			className="card"
			onClick={() => navigate(`/logement/${id}`)}
		>
			<div className="img-container">
				<img className="centered" src={img} alt="" />
			</div>
			<h2>{title}</h2>
		</div>
	);
}

export default Card;
