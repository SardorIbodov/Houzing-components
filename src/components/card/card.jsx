import React from "react";
import "./card.css";
import bedIcon from "../../assets/icons/bed.svg";
import bathIcon from "../../assets/icons/bath.svg";
import carIcon from "../../assets/icons/car.svg";
import rulerIcon from "../../assets/icons/ruler.svg";
import resizeIcon from "../../assets/icons/resize.svg";
import heartIcon from "../../assets/icons/heart.svg";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        {/* CARD-BACKGROUND  */}
        <div
          className="card_bg"
          style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
        >
          <span className="card_bg-pins featured">featured</span>
          <span className="card_bg-pins sale">for sale</span>
        </div>
        {/* ---------- */}

        {/* CARD-INFO */}
        <div className="card_info">
          <div className="card_info-content">
            <div className="person">
              <img src={this.props.personImg} alt="" />
            </div>
            <a href="#">
              <h3 className="card_title">New Apartment Nice Wiew</h3>
            </a>
            <p className="card_subtitle">Quincy St, Brooklyn, NY, USA</p>
            <div className="card_properties">
              <div className="card_property">
                <div className="property_icon">
                  <img src={bedIcon} alt="" />
                  <p className="property_info">4 Beds</p>
                </div>
              </div>
              <div className="card_property">
                <div className="property_icon">
                  <img src={bathIcon} alt="" />
                  <p className="property_info">5 Baths</p>
                </div>
              </div>
              <div className="card_property">
                <div className="property_icon">
                  <img src={carIcon} alt="" />
                  <p className="property_info">1 Garage</p>
                </div>
              </div>
              <div className="card_property">
                <div className="property_icon">
                  <img src={rulerIcon} alt="" />
                  <p className="property_info">1200 Sq Ft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------- */}

        {/* CARD-PRICE */}
        <div className="card_price">
          <div className="card_charge">
            <p className="charge_sale">$2,800/mo</p>
            <p className="charge_default">$7,500/mo</p>
          </div>
          <div className="price_icons">
            <div className="price_icon resize">
              <img src={resizeIcon} alt="" />
            </div>
            <div className="price_icon heart">
              <img src={heartIcon} alt="" />
            </div>
          </div>
        </div>
        {/* ---------- */}
      </div>
    );
  }
}

export default Card;
