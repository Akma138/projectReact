import React from 'react'
import Item from '../item/item.jsx'

export class List extends React.Component {
  render(){
    console.log('list')
    return(
      <>
        <div>list</div>
        <Item />
      </>
    );
  }
}

export default List; 


