import React,{Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap'; 
import {card49} from './card49.css';

export class Card49 extends Component {
render(){
    return(
      <div>
      <ReactBootstrap.Card border="secondary" style={{ width: '45rem' }}>
      
      <ReactBootstrap.Card.Body>
      <ReactBootstrap.Row>
    <ReactBootstrap.Col>13:41</ReactBootstrap.Col>
    <ReactBootstrap.Col xs={5}>6.Building your Startup </ReactBootstrap.Col>
    <ReactBootstrap.Col>2.What is your Startup?</ReactBootstrap.Col>
  </ReactBootstrap.Row>
  <br></br>
        <ReactBootstrap.Card.Text className='App-link'>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.<br></br>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
          Some quick example text to build on the card title and make up the bulk
          of the card's content.<br></br>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.<br></br>
        </ReactBootstrap.Card.Text>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
    <br></br>
    </div>
    )
}
}