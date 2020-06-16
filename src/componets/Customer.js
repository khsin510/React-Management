import React, {Component} from 'react'

export default class Customer extends Component {

    render() {
        console.log(this.props);
        // console.log(data)
        return (<div>
            <h2>{this.props.name}</h2>
            <h2>{this.props.age}</h2>
            <h2>{this.props.job}</h2>
            <h2>{this.props.gender}</h2>

        </div>
        )
    }
}