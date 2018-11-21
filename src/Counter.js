import React from 'react'

import Button from './components/Button'

class Counter extends React.Component {
constructor(props){
    super()

    this.state = {
        number: props.startNumber
    }
}
    render() {
        return (
            <div>
                <h1>
                    {this.props.startNumber}
                </h1>
                <Button
                onClick={() => alert('Its working!')}
                label={'+'}
                />
                <Button
                onClick={() => alert('Its working!')}
                label={'-'}
                />
            </div>
        )
    }
}

export default Counter