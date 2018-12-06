import React, { Component } from 'react'
import {getWorksByAuthorId} from '../../../shared/Penguin'
import Work from '../../Work/Work'

class Author extends Component {
  state = {
    author: null,
    works: []
  }
  componentDidMount = async () => {
    const id = this.props.match.params.id
    await getWorksByAuthorId(id)
            .then(resp =>
              this.setState({ author: resp.data.works[0].author, works: resp.data.works }
            ))
  }
  render() {
    const { works, author } = this.state
    return (
      <div>
        { author && <h1>{author}</h1>}
        {
          works.map(w =>
            <Work key={w.workId} title={w.title} />
          )
        }
      </div>

    )
  }
}
export default Author
