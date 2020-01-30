import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Search } from "./components/search-input/search.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
            monsters: [
                /*{ name: "Azathoth" },
                { name: "Cthulhu" },
                { name: "Yog-Sothoth" },
                { name: "Nyarlathotep" },
                { name: "Shub-Niggurath" }*/
            ]
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    onChangeHandler = e =>
        this.setState({ searchField: e.target.value.toLowerCase() });

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(el =>
            el.name.toLowerCase().includes(searchField)
        );
        return (
            <div className="App">
                <h1>Monster Test</h1>
                <Search
                    placeholder="Type name here"
                    changeHandler={this.onChangeHandler}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
