import React, { Component } from "react";
import Dog from "./components/DogComponent/Dog";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomDogs: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://dog.ceo/api/breeds/image/random/10");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ randomDogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Doggos</h1>
        <div className="dog-list__container">
          {this.state.randomDogs.map((dogImg, index) => {
            return <Dog dogImg={dogImg} key={"dog" + index} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
