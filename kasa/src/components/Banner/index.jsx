import "../../styles/Banner.scss";

function Banner({img, alt, text}) {
	return (
		<div className="banner">
      <img className="centered" src={img} alt={alt} />
			<h2 className="centered">{text}</h2>
		</div>
	);
}

export default Banner;
