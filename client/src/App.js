import logo from './logo.svg';
import './App.css';

import List from './components/list/list.jsx';

import Form from './components/form/form';


function App() {
  console.log('app')

  const addHandler = (e) => {
    e.preventDefault()
    console.log('priv')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <Form add={addHandler}></Form>
        <List> </List>
      
      </header>
    </div>
  );
}

export default App;
