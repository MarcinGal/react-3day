import React from 'react'

import Paper from './components/Paper'
import Counter from './Counter'


const App = (props) => (
  <Paper>
    <Counter
      startNumber={5}
    />
  </Paper>
)

export default App;
