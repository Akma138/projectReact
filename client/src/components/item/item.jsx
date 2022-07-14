import React from 'react'
import styles from '../list/style.module.css'

function Item({ item, deleteHandler, addLike }) {
  return(
    <div className={styles.item}>
      <div className="card" style={{width: '10rem'}}>
       <img src="./images/2.gif" className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title" style={{color: 'black'}}>{item.name ?? 'no name'}</h5>
       <p className="card-text" style={{color: 'black'}} >{item.password ?? 'no email'}</p>
       <button onClick={()=> deleteHandler(item.id)} className="btn btn-secondary">Удалить</button>
       
       <button onClick={()=> addLike(item.id)} className="btn btn-secondary">Like {item.likes}</button>
   </div>
  </div>
  </div>
  );
}

export default React.memo(Item); 
