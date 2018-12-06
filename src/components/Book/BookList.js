import React from 'react'
import Book from './Book'

const BookList = ({books}) => (
  <ul>
    {
      books.map(b => <Book key={b.key} name={b.name} />)
    }
  </ul>
)

export default BookList
