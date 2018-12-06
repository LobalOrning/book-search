import React, { Component } from 'react'
import SearchForm from '../../Search/SearchForm'
import AuthorList from '../../Author/AuthorList'
import BookList from '../../Book/BookList'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: [],
      books: []
    }
  }
  setAuthors = (authors) => {
    this.setState({ authors: authors, books: []})
  }
  setBooks = (books) => {
    this.setState({ books: books, authors: [] })
  }
  render() {
    return(
      <div>
        <SearchForm setAuthors={this.setAuthors} setBooks={this.setBooks} />
        <AuthorList authors={this.state.authors} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default Search

