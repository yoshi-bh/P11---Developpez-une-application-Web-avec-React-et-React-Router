import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import Error from "../Error/";

function Logement() {
	const { logementID } = useParams();

	if (!data.some((elem) => elem.id === logementID)) {
		return <Error />;
	}

	return (
		<div>
			<h1>Questionnaire 🧮</h1>
			<h2>Question {logementID}</h2>
		</div>
	);
}

export default Logement;
