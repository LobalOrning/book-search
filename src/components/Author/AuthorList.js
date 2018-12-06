import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class AuthorList extends Component {
  render() {
    const { authors } = this.props
    return(
      <div>
        {
          authors.length > 0 && <p>Click an Author to view more about them:</p>
        }
        <ul>
          {
            authors.map(a =>
              <li
                key={a.key}
              >
                <Link to={`/author/${a.key}`}>{a.name}</Link>
              </li>
            )
          }
        </ul>

      </div>
    )
  }
}

export default AuthorList
