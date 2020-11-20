import { Card, Button } from 'react-bootstrap'
import React from 'react'

class SingleBook extends React.Component {
  render() {
    return (
      <Card style={{ width: '13rem' }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>$ {this.props.book.price}</Card.Text>
          <Button className='my-1' variant="outline-warning">Buy Now</Button>
          <Button
            variant="outline-info"
            onClick={this.props.onClick}
          >Comment
        </Button>
        </Card.Body>
      </Card >
    )
  }
}


export default SingleBook