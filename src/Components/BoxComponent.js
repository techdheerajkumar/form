import React, { Component } from 'react'

class BoxComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childState: {
                name: ''
            },
            arr: []
        }
    }

    changeHandler(e) {
        this.setState({
            childState: { ...this.state.childState, name: e.target.value }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input type="text" placeholder="enter name" value={this.state.childState.name} onChange={(e) => this.changeHandler(e)} />
                <button onClick={() => this.props.getDataClick(this.state.childState.name)}>Get Data</button>
                <ul>
                    {this.props.list.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default BoxComponent