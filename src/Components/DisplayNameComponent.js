import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayNameComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }

}

export default connect(mapStateToProps)(DisplayNameComponent) 