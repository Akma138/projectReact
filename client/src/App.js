import logo from './logo.svg';
import './App.css';

import List from './components/list/list.jsx';

import Form from './components/form/form';
import { useState } from 'react';


function App() {
  console.log('app')
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});


  const addHandler = (e) => {
    e.preventDefault()
    console.log('priv')
    setItems(prev => [...prev, 
              {myId: Math.round(Math.random()* 1000), title: inputs.title, text: inputs.text, text: inputs.text2, likes: 0}])
    setInputs({})
    }

  const inputsHandler = (e) => {
    console.log(e.target.value)
    setInputs(pre => ({...pre, [e.target.name]: e.target.value}))
  }

  const deleteHandler = (id) => {
    setItems(items.filter((item) => item.myId !== id))
  }
  const addLike = (id) => {
    setItems(items.filter((item) => item.myId === id ? item.likes +=1: item))
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
