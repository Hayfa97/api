import React from 'react';
import {Card,ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Cards = (props) => {
    return (
        <div style={ {margin:'20px'} }>
 <Card border="info" style={{ width: '18rem' }}>
    <Card.Header>Card {props.userr.id} </Card.Header>
    <Card.Body>
      <Card.Title> {props.userr.name} </Card.Title>
      <Card.Text>
       {props.userr.email}
      </Card.Text>
    </Card.Body>
  </Card>

 
        </div>
    )
}
