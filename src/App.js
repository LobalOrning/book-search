import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Home from './components/Page/Home/Home'
import Search from './components/Page/Search/Search'
import ErrorDisplay from './components/Page/Error/Error'
import Author from './components/Page/Author/Author'
import NoMatch from './components/Page/404/NoMatch'

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/error'>Error display</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/error" component={ErrorDisplay} />
        <Route path="/author/:id" component={Author} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App
