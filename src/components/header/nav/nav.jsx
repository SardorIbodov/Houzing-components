import React from "react";
import "./nav.css";
import headerLogo from "../../../assets/icons/headerLogo.svg";
import filterImg from "../../../assets/icons/setting-lines.svg";
import inputImg from "../../../assets/icons/search-icon.svg";
import searchImg from "../../../assets/icons/loupe.svg";
import { database } from "./database";
import { databaseKeys } from "./database";

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isFilterOpened: false,
      database: database,
    };
  }

  filter = {};

  render() {
    let res = database;
    let { isFilterOpened } = this.state;

    const showFilter = () => {
      isFilterOpened
        ? this.setState({ isFilterOpened: false })
        : this.setState({ isFilterOpened: true });
    };

    const cancel = () => {
      this.setState({ isFilterOpened: false });
    };

    const change = ({ target: { value, placeholder } }) => {
      let info = database;
      this.filter[placeholder] = value;
      Object.entries(this.filter).forEach(([key, value]) => {
        info = info.filter((vl) => {
          return vl[placeholder].toString().includes(value);
        });
      });
      this.setState({ info });
    };

    const submit = () => {
      this.setState({ isFilterOpened: false });
      this.setState({ database: this.state.info });
    };

    const clearFilter = () => {
      this.setState({ database: database });
    };

    return (
      <header className="header">
        <div className="menu">
          <div className="container menu_container">
            <div className="logo">
              <a href="#">
                <img src={headerLogo} alt="Logo" />
              </a>
            </div>
            <ul className="navigation">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <div className="login">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
        <div className="search-panel">
          <div className="container search-panel_container">
            <label className="search-input">
              <button>
                <img src={inputImg} alt="" />
              </button>
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
              />
            </label>
            <button className="filter-button" onClick={showFilter}>
              <div>
                <img src={filterImg} alt="filter" />
                <span>Advanced</span>
              </div>
            </button>
            <button className="search-button">
              <div>
                <img src={searchImg} alt="filter" />
                <span>Search</span>
              </div>
            </button>
          </div>
        </div>

        {isFilterOpened ? (
          <div className="filter-panel">
            <div className="container filter-panel_container">
              <div className="filter-panel_content">
                <h2>Address</h2>
                <div className="inputs">
                  <input onChange={change} type="text" placeholder="country" />
                  <input onChange={change} type="text" placeholder="region" />
                  <input onChange={change} type="text" placeholder="city" />
                  <input onChange={change} type="text" placeholder="zipcode" />
                </div>

                <h2>Apartment info</h2>
                <div className="inputs">
                  <input onChange={change} type="text" placeholder="rooms" />
                  <input onChange={change} type="text" placeholder="size" />
                  <input onChange={change} type="text" placeholder="sort" />
                </div>

                <h2>Price</h2>
                <div className="inputs">
                  <input onChange={change} type="text" placeholder="minprice" />
                  <input onChange={change} type="text" placeholder="maxprice" />
                </div>
              </div>
              <div className="filter-panel_buttons">
                <button className="cancel" onClick={cancel}>
                  Cancel
                </button>
                <button className="submit" onClick={submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="container">
          <table border="1" className="table">
            <tr>
              {databaseKeys.map((key) => (
                <th>{key}</th>
              ))}
            </tr>
            {this.state.database.map((data) => {
              return (
                <tr>
                  {Object.keys(data).map((key) => {
                    return <td>{data[key]}</td>;
                  })}
                </tr>
              );
            })}
          </table>
          <button className="clear-filter" onClick={clearFilter}>
            Clear filter
          </button>
        </div>
      </header>
    );
  }
}
