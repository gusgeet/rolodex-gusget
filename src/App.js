import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

   
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
    .then(console.log(this.state.monsters));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })

  }

  
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className='App'>
        <h1>Monsters Rolodex' Gusget! </h1>
        <SearchBox
          placeholder='buscar monstruo'
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
      
    )
  }

}

export default App;
