import React from 'react';
import ReactDOM from 'react-dom';
import { animateScroll as scroll} from 'react-scroll';

import Character from '../components/Character';
import CharactersList from '../components/CharactersList';
import LoadingCharacters from '../components/LoadingCharacters';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

class Characters extends React.Component {
  BASE_URL = 'https://rickandmortyapi.com/api/character';

  state = {
    page: 1,
    pages: null,
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData();
  }

  async fetchData(){
    this.setState({loading: true, error: null});
    try{
      const response = await fetch(`${this.BASE_URL}/?page=${this.state.page}`);
      const data = await response.json();
      this.setState({loading: false, data: data, pages: data.info.pages});
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleClickNext = () => {
    if(this.state.page < this.state.pages){
      this.setState({page: this.state.page += 1});
      this.fetchData();
      this.scrollTop();
    }
  }

  handleClickPrev = () => {
    if(this.state.page > 1){
      this.setState({page: this.state.page -= 1});
      this.fetchData();
      this.scrollTop();
    }
  }

  handleKeyUp = (e) => {
    if(e.target.value <= this.state.pages){
      this.setState({
        page: Number(e.target.value)
      });
      if(e.key === 'Enter'){
        this.fetchData();
        this.scrollTop();
      }
    }
  }

  scrollTop(){
    this.time = setTimeout(() => {
      scroll.scrollToTop();
    }, 500);
  }

  componentWillUnmount(){
    clearTimeout(this.time);
  }

  render(){
    if(this.state.loading === true || this.state.data === undefined){
      return (
        <CharactersList NameClass="containerCharacters">
          <LoadingCharacters list={true}/>
        </CharactersList>
      );
    }

    if(this.state.error){
      return (
        <h1 style={{"color": "white"}}>Hubo un error</h1>
      );
    }

    return (
      <React.Fragment>
        <CharactersList NameClass="containerCharacters">
          <Character characters={this.state.data.results}/>
        </CharactersList>
        {
          ReactDOM.createPortal(
            <Footer>
              <Pagination
                next={this.handleClickNext}
                prev={this.handleClickPrev}
                onKeyUp={this.handleKeyUp}
                page={this.state.page}
              />
            </Footer>,
            document.querySelector('.containerApp')
          )
        }
      </React.Fragment>
    );
  }
}

export default Characters;