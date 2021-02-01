import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './components/PhotoContainer'
import Pagination from './components/Pagination'

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => {
      if (!response.ok) {
        throw Error("Error fetching images");
      }
      return response.json()
    .then(allData => {
      this.setState({photos: allData});
      })
    .catch(err => {
      throw Error(err.message);
        })
      }
    );
    console.log(this.state.photos);
  }

  render() { 
    return ( 
      <section className='app'>
        <h1 className='title'>Image Gallery</h1>
        
        <Pagination photos={this.state.photos}/>
      </section>
     );
  }
}
 
export default App;
