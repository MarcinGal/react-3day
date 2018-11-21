import React from 'react'

import Paper from './components/Paper'
import Counter from './Counter'


const App = (props) => (
  <Paper>
    <Counter
      startNumber={10}
    />
  </Paper>
)

export default App;
