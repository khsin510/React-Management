import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';

const customers = [
    {
        'id': 1,
        'name': '곽호성',
        'image': "https://placeimg.com/64/64/1",
        'age': 15,
        'gender': 'male',
        'job': 'student'
    }, {
        'id': 2,
        'name': '박진실',
        'image': "https://placeimg.com/64/64/2",
        'age': 15,
        'gender': 'male',
        'job': 'student'
    }, {
        'id': 3,
        'name': '홍길동',
        'image': "https://placeimg.com/64/64/3",
        'age': 15,
        'gender': 'male',
        'job': 'student'
    }
]

class App extends Component {
    render() {
        return (
            <div className="gray-background">
                {
                    customers.map(customer => {
                        return <Customer {...customer} key={customer.id}/>
                    })
                }

            </div>
        );
    }
}

export default App;
