import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';

import Counter from './Counter'
import Navigation from './Navigation/Navigation'
import Route1 from './Home'

const App = (props) => (
  <Router>
    <div>
      <Navigation
        title="Bar z plackami"
      >
        <Link to='/'>
          <MenuItem>
            Home
          </MenuItem>
        </Link>
        <Link to='/counter'>
          <MenuItem>
            Counter
          </MenuItem>
        </Link>
      </Navigation>
      <div>
        <div>
          <Route path="/" component={Route1} />
          <Route path="/counter" component={() => <Counter startNumber={5} />} />
        </div>
      </div>
    </div>
  </Router>

)

export default App;
