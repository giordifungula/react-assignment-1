import React, {Component} from 'react';
import './App.css';
import Menu from './Components/MenuComponent'
import { Navbar, NavbarBrand } from 'reactstrap';
import {Dishes} from './shared/dishes';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dishes: Dishes
      }
    }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
          <Menu dishes={this.state.dishes}/>
        </Navbar>
      </div>
    );
  }
}


export default App;
