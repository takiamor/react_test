import React,{Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap'; 
import taki from './../assets/image/taki.jpg';


export class Header34 extends Component{

    render(){
        return (
        
        <ReactBootstrap.Navbar bg="light">
    <ReactBootstrap.Container>
      <ReactBootstrap.Navbar.Brand href="#home">startup commons</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Nav.Link href="#action2">Courses</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#action2">My Library</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#action2">About Us</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#action2">Case Studies</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown id="navbarScrollingDropdown"></ReactBootstrap.NavDropdown>
      <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>      <img
            src={taki}
            class="rounded-circle"
            height="25"
            
            loading="lazy"
          />
      
    </ReactBootstrap.Container>
  </ReactBootstrap.Navbar>
        )
    }

}