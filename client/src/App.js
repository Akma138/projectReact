//с беком
import logo from './logo.svg';
import './App.css';

import List from './components/list/list.jsx';
import Product from './components/Product/Product';
import Form from './components/form/form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route,} from "react-router-dom";
import Main from './components/Main/Main';
import Allproduct from './components/Allproduct/Allproduct';
import Oneproduct from './components/Oneproduct/Oneproduct';



function App() {
  console.log('app')
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState({});
  const [products, setProducts] = useState([]);
  const [inpats, setInpats] = useState({});
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
  
  const addHandler1 = (e) => {
    e.preventDefault()
    console.log('privet')
    setProducts(prev => [...prev, { myid: Math.round(Math.random()* 1000), 
                    title: inpats.title,
                    text: inpats.text,
                    price: inpats.price,
                    location: inpats.location}]);
  setInpats({})
  }
  console.log('products =>', products);
  const inpatsHandler = (e) => {
    console.log(e.target.value)
    setInpats(pr => ({...pr, [e.target.name]: e.target.value}))
  }

  const deleteHandler1 = (id) => {
    // console.log(id);
    // axios.delete('http://localhost:3004/products/' + id)
    // .then((deleteFromServer)=> {
    //   console.log(deleteFromServer);
    //   getItems();
    // })
    setProducts(products.filter((product) => product.myid !== id))
  }
 

  let addHandler = (e) => {
    e.preventDefault()
    console.log('privet')
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
       <Routes>
        <Route path='/' element ={ <Main gift={gift} getGift={getGift}/>} />
        <Route path='/registration'element = {  <Form add={addHandler}
              inputsHandler={inputsHandler}
              inputs={inputs} />} />
        <Route path='/allusers' element = {<List items={items} deleteHandler={deleteHandler} addLike={addLike}/>} />
        <Route path='/product' element = {<Product addHandler1={addHandler1}
                  inpatsHandler={inpatsHandler}
                  inpats={inpats}/>} />
       <Route path='/allproduct' element = { <Allproduct products={products}
                   deleteHandler1={deleteHandler1}/>} />
        
       </Routes>
       
        {/* <Product addHandler1={addHandler1} 
                  inpatsHandler={inpatsHandler}
                  inpats={inpats}/>
       <Allproduct products={products}
                   deleteHandler1={deleteHandler1}/> */}
     
       
       
      
      </header>
    </div>
  );
}

export default App;
