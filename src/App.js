import React,{ Component }  from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import Customer from './components/Customer';

const customers = [{
  'id'        : 1,
  'name'      : '권정환',
  'birthday'  : '930429',
  'gender'    : '남자',
  'job'       : '대학생'
}]

class App extends Component {
  render() {
    return (
      customers.map(c => {
        return (
          <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
        );
      })
    )
  }
}

export default App;
