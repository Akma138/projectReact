//с беком
import logo from './logo.svg';
import './App.css';

import List from './components/list/list.jsx';

import Form from './components/form/form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route,} from "react-router-dom";
import Main from './components/Main/Main';


function App() {
  console.log('app')
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});
  let [gift, setGift] = useState({});

  useEffect(()=> {
    getItems()
  }, [])
  useEffect(()=> {
    getGift()
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

  const getGift = () => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then((url)=> {
        console.log(url);
        console.log(url['data'][0]['url']);
        let catUrl = url['data'][0]['url'];
        setGift(catUrl);
      })
  }
  
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
      <Navbar></Navbar>
      
     
       <button class="btn btn-secondary" onClick={getGift}>Получи своего котика</button>
        <img src={gift} height='300px' width='250px'></img> 
        
       <Routes>
        <Route path='/' element ={ <Main />} />
        <Route path='/registration'element = {  <Form add={addHandler}
              inputsHandler={inputsHandler}
              inputs={inputs} />} />
        <Route path='/allusers' element = {<List items={items} deleteHandler={deleteHandler} addLike={addLike}/>} />
       
       
       </Routes>


      </header>
    </div>
  );
}

export default App;
