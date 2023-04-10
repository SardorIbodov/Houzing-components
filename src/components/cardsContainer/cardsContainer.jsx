import React from "react";
import Card from "../card/card";
import "./cardsContainer.css";
import cardBg1 from "../../assets/house1.png";
import cardBg2 from "../../assets/house2.png";
import cardBg3 from "../../assets/house3.png";
import person1 from "../../assets/icons/person1.svg";
import person2 from "../../assets/icons/person2.svg";
import person3 from "../../assets/icons/person3.svg";

class CardsContainer extends React.Component {
  render() {
    let cardBg = [cardBg1, cardBg2, cardBg3];
    let personImg = [person1, person2, person3];

    return (
      <div className="cardsContainer">
        {cardBg.map((card, index) => {
          return <Card backgroundImage={card} personImg={personImg[index]} />;
        })}
      </div>
    );
  }
}

export default CardsContainer;
