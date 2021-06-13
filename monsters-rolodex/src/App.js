import React, { Component } from 'react';
import CardList from './Components/CardList/card-list.component';
import './App.css';
import SearchBox from './Components/SearchBox/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={'Search Mosnter'}
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
