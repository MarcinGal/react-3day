import React from 'react'

import Button from './components/Button'

class Counter extends React.Component {
    constructor(props) {
        super()

        this.state = {
            number: props.startNumber
        }
    }
initialHandler(){
    this.setState({ number: this.props.startNumber })
}

incHandler(){
    this.setState({ number: this.state.number + 1 })
}

decHandler(){
    this.setState({ number: this.state.number - 1 })
}

multiplyHandler(){
    this.setState({ number: this.state.number * 2 })
}

divideHandler(){
    this.setState({ number: this.state.number / 2 })
}

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={() => this.initialHandler()}
                    label={'Start Number'}
                />
                <Button
                    onClick={() => this.incHandler()}
                    label={'+'}
                />
                <Button
                    onClick={() => this.decHandler()}
                    label={'-'}
                />
                <Button
                    onClick={() => this.multiplyHandler()}
                    label={'*'}
                />
                <Button
                    onClick={() => this.divideHandler()}
                    label={'/'}
                />
            </div>
        )
    }
}

export default Counter