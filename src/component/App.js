import React, { Component } from 'react';
import DieuHuongURL from '../router/DieuHuongURL';
import './../css/App.css';
import Footer from './Footer';
import Header from './Header';
import dl from './data.json';
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data : dl
        
      }
  }

  getTextSearch =(x)=>{
    this.setState({
      searchText : x
    });
    
  }

  
  
  render() {
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.tensearch.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })

   
    
    return (
      <div>
          <Header
          checkConnectProps ={(x)=>this.getTextSearch(x)}
          
          />
            <DieuHuongURL   />
          <Footer/>
      </div>
    );
  }
}
 
export default App;
