import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';

const customer={
    'name':'곽호성',
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
