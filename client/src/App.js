//с беком
import logo from './logo.svg';
import './App.css';

import List from './components/list/list.jsx';

import Form from './components/form/form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';


function App() {
  console.log('app')
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(()=> {
    getItems()
  }, [])

  const getItems = () => {
    axios.get('http://localhost:3004/users')
      .then((postsFromServer)=> {
        console.log(postsFromServer.data.allUsers)
        if (postsFromServer.data.allUsers.length) {
          setItems(postsFromServer.data.allUsers)
        }
      })
  };
  
  const addHandler = (e) => {
    e.preventDefault()
    console.log('priv')
    console.log("e => ", e)
    let obj = {
      id: Math.round(Math.random()* 1000), 
      name: inputs.name, 
      password: inputs.password, 
      email: inputs.email, 
      likes: 0
    }
    // setItems(prev => [...prev, 
    //           obj])
    setInputs({})
    axios.post('http://localhost:3004/users',obj)
    .then((postsFromServer)=> {
      console.log(postsFromServer);
      getItems();
    })
  }

  const inputsHandler = (e) => {
    console.log(e.target.value)
    setInputs(pre => ({...pre, [e.target.name]: e.target.value}))
  }

  const deleteHandler = (id) => {
    console.log(id);
    axios.delete('http://localhost:3004/users/' + id)
    .then((deleteFromServer)=> {
      console.log(deleteFromServer);
      getItems();
    })
    //setItems(items.filter((item) => item.id !== id))
  }
  const addLike = (id) => {
    setItems(items.filter((item) => item.id === id ? item.likes +=1: item))
  }

  return (
    <div className="App">
      <header className="App-header">
      
       <p>Привет, это сайт единных скидок. </p>
       <p>Если хочешь узнать секретные скидки, зарегистрируйся.</p>
       <p>Рады, что вы с нами! Нас много!</p>
       <br></br>
        <Form add={addHandler}
              inputsHandler={inputsHandler}
              inputs={inputs}></Form>

        <List items={items} deleteHandler={deleteHandler} addLike={addLike}/>
      
      </header>
    </div>
  );
}

export default App;
