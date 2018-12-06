import React, { Component } from 'react'
import { searchAuthors, searchBooks } from '../../shared/Penguin'

class SearchForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        searchType: 'author'
      }
    }
    handleSearchOnClick = async (event) => {
      event.preventDefault()
      var value = this.searchInput.value
      if(!value) {
        return
      }

      switch (this.state.searchType) {
        case 'author':
          await searchAuthors(value)
                  .then(resp => this.props.setAuthors(resp.data.results))
          break
        case 'book':
          await searchBooks(value)
                  .then(resp => this.props.setBooks(resp.data.results))
          break
        default:
          break;
      }
    }
    handleSearchTypeOnChange = (event) => {
      this.setState({ searchType: event.target.value })
    }
    render() {
      return(
        <div>
          <form>
            <label>Search</label>
            <input type="text" ref={node => this.searchInput = node} />
            <div>
              <span>Search by:</span>

              <div>
                <input
                  type="radio"
                  value="author"
                  checked={this.state.searchType === 'author'}
                  onChange={this.handleSearchTypeOnChange}
                />
                <label>Author</label>
              </div>

              <div>
                <input
                  type="radio"
                  value="book"
                  checked={this.state.searchType === 'book'}
                  onChange={this.handleSearchTypeOnChange}
                />
                <label>Book</label>
              </div>

            </div>
            <button
              onClick={this.handleSearchOnClick}
            >
              Search
            </button>
          </form>
        </div>
      )
    }
}

export default SearchForm
