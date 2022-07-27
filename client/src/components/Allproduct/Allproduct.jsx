import React from 'react'
import Oneproduct from '../Oneproduct/Oneproduct'
import Product from '../Product/Product'

export default function Allproduct({products, deleteHandler1}) {
  console.log('allproduct')
  return (
    <>
    <div>Allproduct</div>
    {products.map((products)=> <Oneproduct key={products.myId} products={products} deleteHandler1={deleteHandler1}/>)}
 
    </>
    
  )
}
