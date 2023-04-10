import React from "react";
import Card from "../card/card";
import "./cardsContainer.css";

class CardsContainer extends React.Component {
  render() {
		let bgImages = [
			"../../assets/house1.png",
			"../../assets/house2.png",
			"../../assets/house3.png"
		]
    return (
      <div className="cardsContainer">
				{
					bgImages.map(card => {
						return <Card backgroundColor={card} />
					})
				}
      </div>
    );
  }
}

export default CardsContainer;
