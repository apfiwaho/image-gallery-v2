import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Pagination from './components/Pagination'

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: []
    };
   
    var AjaxGet = function (url) {

      var result = $.ajax({  type: "GET", url: url,dataType: "json",async: false,success: function (data) {}}).responseJSON;
  
      return  result;
  }
  var pics =AjaxGet('https://jsonplaceholder.typicode.com/photos');

  var i=0;
  $('.slideShow').attr('src',pics[i].url);
  setInterval(function () {
      
      i++;
      if (i > 3){
          i=0;
      }
      $('.slideShow').attr('src',pics[i].url).stop(true,true).hide().fadeIn();
  },5000);
    
    }
  render() { 
    return ( 
      <section className='app'>
        <h1 className='heading'>Image Gallery</h1>
        
            <img className="slideShow" />
      
        
        <Pagination />
      </section>
     ); 
  }
}
 
export default App;
