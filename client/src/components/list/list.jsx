import React from 'react'
import Item from '../item/item.jsx'
import styles from './style.module.css'

export default function List({ items, deleteHandler}) {
 console.log('list', styles)
    return(
      <div className={styles.list}>
      
        {items.map((item)=> <Item key={item.myId} item={item} deleteHandler={deleteHandler}/>)}
      </div>
    );
  }





