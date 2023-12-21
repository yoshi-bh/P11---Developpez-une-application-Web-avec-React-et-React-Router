import Image from "../../assets/sea-cliffs.jpg";
import Banner from "../../components/Banner/";
import "../../styles/App.css";

function App() {
	return (
		<div className="App">
			<Banner
				img={Image}
				alt="Image of cliffs by the sea"
				text="Chez vous, partout et ailleurs"
			/>
      <h1>Page d'Acceuil</h1>
		</div>
	);
}

export default App;
