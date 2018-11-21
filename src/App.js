import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter'
import Navigation from './Navigation/Navigation'
import Route1 from './Home'

const App = (props) => (
  <div>
    <Navigation
      title="Bar z plackami"
    />
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
        <div>
          <Route path="/" component={Route1} />
          <Route path="/counter" component={Counter} />
        </div>
      </div>
    </Router>
  </div>

)

export default App;
