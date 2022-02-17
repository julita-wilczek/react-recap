// import SingleBook from "./SingleBook" This is for a functional component
import SingleBook2 from "./SingleBookClass" // This is for class component
import { Container, Row, Form, FormControl } from "react-bootstrap"
import WarningSing from "./WarningSing"
import { Component } from "react"

class BookList extends Component {

render(){
return (
<Container fluid>
<Row className="g-2 justify-content-center">
{this.props.books.filter(book => book.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1)
.map((book) => <SingleBook2 key = {book.asin} title = {book.title} img= {book.img} asin = {book.asin}/>)}</Row>
<WarningSing content = "Goodbye! Come on, all you time-wasting bastards, back on the streets. "/>
</Container>

)
}
}

export default BookList


/*
Create a filterBookList function. By writing into an input field a search query, 
the BookList should show only the books containing the specified string 
into the title 
(hint: save the query into the BookList component state and filter the books accordingly).
https://www.pluralsight.com/guides/how-to-send-state-of-current-component-as-a-parameter-to-another-external-method-using-react
return <ExampleComponent data={this.state}>
 */