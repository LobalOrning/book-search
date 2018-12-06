import React, { Component } from 'react'

class ErrorDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  handleToggleErrorClick = (e) => {
    e.preventDefault()
    this.setState({ error: !this.state.error })
  }
  render() {
    const error = this.state.error
    return(
      <div>
        {
          error && <div>Error is on</div>
        }
        <form>
          <p>
            Click to toggle Error on and off
          </p>
          <button
            onClick={this.handleToggleErrorClick}
          >
            Toggle Error {error ? 'Off' : 'On'}
          </button>
        </form>
      </div>
    )
  }
}

export default ErrorDisplay
