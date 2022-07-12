import React from 'react'
import styles from '../list/style.module.css'

// export class Item extends React.Component {
//   render(){
//     console.log('item')
function Item({ item, deleteHandler }) {
    return(
      <div className={styles.item}>
        <div className="card" style={{width: '10rem'}}>
         <img src="images/2.gif" className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title" style={{color: 'black'}}>{item.title ?? 'no name'}</h5>
         <p className="card-text" style={{color: 'black'}} >{item.text ?? 'no email'}</p>
         <button onClick={()=> deleteHandler(item.myId)} className="btn btn-secondary">Удалить</button>
        
     </div>
    </div>
    </div>
    );
  }

export default React.memo(Item); 
