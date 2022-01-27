
import React from 'react';
import { Card49 } from './component/Card49';
import {Header34} from './component/Header34';
import {Card28} from './component/Card28';
import {Card26} from './component/Card26';
import * as ReactBootstrap from 'react-bootstrap'; 

function App() {
  return (
    
    <div className="App">
      <Header34/>
      <br></br>
    <center><Card49 /></center>  
    <br></br>
  <ReactBootstrap.Container>
  <ReactBootstrap.Row>
    <ReactBootstrap.Col><Card28/></ReactBootstrap.Col>
    <ReactBootstrap.Col><Card28/></ReactBootstrap.Col>
    <ReactBootstrap.Col><Card28/></ReactBootstrap.Col>
  </ReactBootstrap.Row>
</ReactBootstrap.Container>
<br></br>
<center><Card26/></center>
    </div>
  );
}

export default App;
