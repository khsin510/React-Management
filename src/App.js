import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';

const customer={
    'id':1,
    'name':'곽호성',
    'image':"https://placeimg.com/64/64/any",
    'age' : 15,
    'gender':'male',
    'job' : 'student'
}

class App extends Component{
    render(){
        return(
            <div className="gray-background">
               <Customer {...customer} ></Customer>
            </div>
        );
    }
}

export default App;
