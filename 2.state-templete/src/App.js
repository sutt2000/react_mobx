import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import BookListItem from "./components/BookListItem";
import BookList from "./components/BookList";
import Books from "./static_data/Books";
import BookDetail from "./components/BookDetail";
import UserList from "./UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      selectedBook: Books[0],
    };
  }
  onSelectedBook(book) {
    this.setState({
      selectedBook: book,
    });
  }

  onSearchTitle(title) {
    let updateList = Books;
    updateList = updateList.filter((books) => {
      return books.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });
    this.setState({
      books: updateList,
    });

    this.onSelectedBook();
  }

  render() {
    return (
      <div className="App">
        <UserList title="UserList"/>
      </div>
      // <Container>
      //   <SearchBar onSearchTitle={this.onSearchTitle.bind(this)}/>
      //   <Grid container spacing={2}>
      //     <Grid item>
      //       <BookList onSelectedBook={this.onSelectedBook.bind(this)} books={this.state.books} />
      //     </Grid>
      //     <Grid item>
      //       <BookDetail book={this.state.selectedBook} />
      //     </Grid>
      //   </Grid>
      // </Container>
    );
  }
}

export default App;
