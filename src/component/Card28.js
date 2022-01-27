import React,{Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap'; 
import react from './../assets/image/react.png'

export class Card28 extends Component {
    render(){
        return(
            <ReactBootstrap.Card style={{ width: '18rem' }}>
  <ReactBootstrap.Card.Img variant="top" src={react} />
  <ReactBootstrap.Card.Body>
    <ReactBootstrap.Card.Title>React</ReactBootstrap.Card.Title>
    <ReactBootstrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.Button variant="primary">Buy Now</ReactBootstrap.Button>
  </ReactBootstrap.Card.Body>
</ReactBootstrap.Card>
        )
    }
}