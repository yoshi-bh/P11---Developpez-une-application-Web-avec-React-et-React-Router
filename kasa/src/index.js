import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Logement from "./pages/Logement/";
import About from "./pages/About/";
import Error from "./pages/Error/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import "./styles/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<div id="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/logement/:logementID" element={<Logement />} />
					<Route path="/a-propos" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
