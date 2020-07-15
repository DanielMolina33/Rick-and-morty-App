import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Character.css';
import CharactersList from '../components/CharactersList';
import LoadingCharacters from '../components/LoadingCharacters';
import Footer from '../components/Footer';
import Back from '../components/Back';

class CharacterInfo extends React.Component {
  BASE_URL = 'https://rickandmortyapi.com/api/character';

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData();
  }

  async fetchData(){
    this.setState({loading: true, error: null});
    const character_info = `${this.BASE_URL}/${this.props.match.params.id}`;
    try{
      const response = await fetch(character_info);
      const data = await response.json();
      this.setState({loading: false, data: data});
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  render(){
    if(this.state.loading === true && this.state.data === undefined){
      return (
        <CharactersList NameClass="containerCharacterInfo">
          <LoadingCharacters list={false}/>
        </CharactersList>
      );
    }

    if(this.state.error){
      return  <h1 style={{"color": "white"}}>Hubo un error</h1>
    }

    const character = this.state.data;

    return (
      <CharactersList NameClass="containerCharacterInfo">
        <div className="character">
          <img className="character-image" src={character.image} alt={`${character.name} image`}/>
        </div>
        <div className="character-info">
          <p>Name: {character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
        {
          ReactDOM.createPortal(
            <Footer isInfo>
              <Back/>
            </Footer>,
            document.querySelector('.containerApp')
          )
        }
      </CharactersList>
    );
  }
}

export default CharacterInfo;