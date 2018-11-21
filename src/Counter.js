import React from 'react'

import Button from './components/Button'

class Counter extends React.Component {
    state = {

        otherProp: 'whatever',
        number: this.props.startNumber
    }

    initialHandler = () => this.setState({ number: this.props.startNumber })

    incHandler = () => this.setState({ number: this.state.number + 1 })

    decHandler = () => this.setState({ number: this.state.number - 1 })

    multiplyHandler = () => this.setState({ number: this.state.number * 2 })

    divideHandler = () => this.setState({ number: this.state.number / 2 })

    powerHandler = () => this.setState({ number: this.state.number * this.state.number})
    
    divideItselfHandler = () => this.setState({ number: this.state.number / this.state.number})

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.initialHandler}
                    label={'Reset'}
                />
                <Button
                    onClick={this.incHandler}
                    label={'+'}
                />
                <Button
                    onClick={this.decHandler}
                    label={'-'}
                />
                <Button
                    onClick={this.multiplyHandler}
                    label={'* 2'}
                />
                <Button
                    onClick={this.divideHandler}
                    label={'/ 2'}
                />
                <Button
                    onClick={this.powerHandler}
                    label={'power'}
                />
                <Button
                    onClick={this.divideItselfHandler}
                    label={'divide Itself'}
                />
            </div>
        )
    }
}

export default Counter