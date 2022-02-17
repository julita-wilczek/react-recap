import { Component } from 'react'
import {Card, Col} from 'react-bootstrap'
import './SingleBook.css'
import CommentArea from './CommentArea'


class SingleBook2 extends Component{
state = {
  selected: false,
}

toggleState = () => {
  if (this.state.selected === false) {
    this.setState({
      selected: true, 
    })


  } else {
    this.setState({
      selected: false, 
    })

  }
}


render(){
return(
        <Col>
        {this.state.selected && (<CommentArea show="true" asin = {this.props.asin} title = {this.props.title}/>)}
        <Card onClick={(event) => this.toggleState(event)} style={{ width: '167px'}}>
  <Card.Img variant="top" style={{ width: '165px', height:'250px', objectFit: "cover", objectPosition: "left center" }} title={this.props.title} src={this.props.img} />
  <Card.Body style= {{height:"100px"}}> 
    <Card.Title className ="truncate">{this.props.title}</Card.Title>
  </Card.Body>
</Card>


</Col>

)
}
}
export default SingleBook2
