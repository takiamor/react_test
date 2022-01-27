import React,{Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap'; 

export class Card extends Component {
render(){
    return(
      <div>
      <ReactBootstrap.Card border="secondary" style={{ width: '18rem' }}>
      
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>Hello Word</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </ReactBootstrap.Card.Text>
        <ReactBootstrap.Button variant="outline-primary">Cancel</ReactBootstrap.Button>{' '}
        <ReactBootstrap.Button variant="primary">Cancel</ReactBootstrap.Button>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
    <br></br>
    </div>
    )
}
}