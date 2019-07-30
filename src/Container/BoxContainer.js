import React, { Component } from 'react'
import BoxComponent from '../Components/BoxComponent'
import { connect } from 'react-redux'
class BoxContainer extends Component {
    render() {
        return (
            <BoxComponent list={this.props.result} getDataClick={this.props.getDataClick} title={this.props.title}></BoxComponent>
        )
    }
}
const mapStateToProps = state => {
    return {
        title: state.title,
        result: state.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataClick: (value) => dispatch({ type: "GETDATA", payload: value })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer) 