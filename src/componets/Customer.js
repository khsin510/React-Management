import React, {Component} from 'react'

export default class Customer extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
               <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
               <CustomerInfo job={this.props.job} gender={this.props.gender} />
            </div>
        )
    }
}

class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.job}</p>
                <p>{this.props.gender}</p>
            </div>
        )
    }
}