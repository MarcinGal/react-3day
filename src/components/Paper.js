import React from 'react'

import MuiPaper from 'material-ui/Paper';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
}

const Paper = (props) => (
    <MuiPaper>
        {props.children}
    </MuiPaper>
)

export default Paper