import data from "../../data/logements.json";
import Image from "../../assets/sea-cliffs.jpg";
import Banner from "../../components/Banner/";
import Card from "../../components/Card/";
import "../../styles/Home.scss";

function App() {
	return (
		<div className="home">
			<Banner
				img={Image}
				alt="Image of cliffs by the sea"
				text="Chez vous, partout et ailleurs"
			/>
			<div className="card-container">
				{data.map((elem) => (
					<Card
						key={elem.id}
						id={elem.id}
						img={elem.cover}
						title={elem.title}
					></Card>
				))}
			</div>
		</div>
	);
}

export default App;
