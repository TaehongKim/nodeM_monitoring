import React, { Component } from 'react';
import Customer from './components/Customter';
import './App.css';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '이름1',
  'birth': '123111',
  'gender':'F'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '이름2',
  'birth': '32134234',
  'gender':'F'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '이름3',
  'birth': '123234111',
  'gender':'F'
}]

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map( c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birth={c.birth}
              gender={c.gender}
            />
         );        
        })
      }
      </div>
    );
  }    
}

export default App;
