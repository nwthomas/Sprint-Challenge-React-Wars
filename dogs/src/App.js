import React, { Component } from "react";
import Character from "./components/CharacterComponent/Character";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    const URL = `https://swapi.co/api/people/?page=${this.state.currentPage}`;
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = event => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (event.target.value === "previous") {
      if (this.state.currentPage > 1) {
        this.setState(
          {
            currentPage: this.state.currentPage - 1
          },
          () => this.getCharacters()
        );
      } else {
        return;
      }
    } else {
      this.setState(
        {
          currentPage: this.state.currentPage + 1
        },
        () => this.getCharacters()
      );
    }
  };

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="character-list__container">
          {this.state.starwarsChars.map((character, index) => {
            return (
              <Character key={"character" + index} character={character} />
            );
          })}
        </div>
        <div className="pagination__buttons">
          <button
            onClick={this.nextPage}
            type="button"
            className="back__button button"
            value="previous"
          >
            Previous
          </button>
          <button
            onClick={this.nextPage}
            type="button"
            className="next__button button"
            value="next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
