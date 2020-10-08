import React,{Component}  from 'react';
import CardsContainer from './Components/CardsContainer'
import SearchCharacterForm from './Components/SearchCharacterForm'
import './App.css';

class App extends Component{
  state = {
    allCharacters: [],
    selectedCharacters:[],
    inputValue:""
  }
  
  componentDidMount(){
    console.log('ran through once')
    fetch('https://rickandmortyapi.com/api/character')
      .then( response => response.json() )
      .then( data => {
        this.setState({ allCharacters: data.results })
        this.setState({ selectedCharacters: data.results })
      })
  }


  filterCharacters = ( event ) => {
    const input = event.target.value
    const filteredCharacters = this.state.allCharacters
        .filter(
          character => (
            character.name
              .toLowerCase()
              .includes(input.toLowerCase())
          )
        )
    this.setState({ selectedCharacters: filteredCharacters })
    // console.log(event.target.value)
  }

  // function filterCharacter(input){
  //   console.log(this)
  // }

  render(){
    const { selectedCharacters } = this.state
    return (
      <div id="app">
        <h1> Dammit Morty </h1>
        <SearchCharacterForm filterCharacters={this.filterCharacters}/>
        <CardsContainer characters={selectedCharacters}/>
      </div>
    );
  }
}

export default App;
