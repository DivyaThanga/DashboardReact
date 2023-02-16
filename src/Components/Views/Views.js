import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Views = () => {
  return (
    <section style={{ marginTop: '2rem' }}>
      <div className="viewscart">
        <Card style={{ width: '20rem' }} className="Cards">
          <Card.Body>
            <Card.Title className="cardHeads">Completed Tasks </Card.Title>
            <span className="smallTxt">Last Campaign Performance</span>
            <hr />
            <Card.Text style={{ fontSize: '13px' }}>
              campaign sent 2 days ago
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className="Cards1">
          <Card.Body>
            <Card.Title className="cardHeads">Webiste Views</Card.Title>
            <span className="smallTxt">Last Campaign Performance</span>
            <hr />
            <Card.Text style={{ fontSize: '13px' }}>
              campaign sent 2 days ago
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className="Cards2">
          <Card.Body>
            <Card.Title className="cardHeads">Daily Sales</Card.Title>
            <span className="smallTxt">Last Campaign Performance</span>
            <hr />
            <Card.Text style={{ fontSize: '13px' }}>
              campaign sent 2 days ago
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default Views;
