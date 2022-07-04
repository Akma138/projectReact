import React from 'react'

export class Item extends React.Component {
  render(){
    console.log('item')
    return(
      <>
        <div className="card" style={{width: '18rem'}}>
         <img src="images/2.gif" className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title" style={{color: 'black'}}>Card title</h5>
         <p className="card-text" style={{color: 'black'}} >Some quick example </p>
         <button className="btn btn-secondary">Удалить</button>
         <button className="btn btn-secondary">Изменить</button>
  </div>
</div>
      </>
    );
  }
}

export default Item; 
