import React, { Component } from "react";
import { List } from "@material-ui/core";
import BookListItem from "./BookListItem";

class BookList extends Component {
  render() {
    const bookItems = this.props.books.map((books) => {
      return (
        <BookListItem
          book={books}
          key={books.ISBN}
          onSelectedBook={this.props.onSelectedBook}
        />
      );
    });
    return <List>{bookItems}</List>;
  }
}

export default BookList;
