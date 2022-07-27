import React from 'react'
import Oneproduct from '../Oneproduct/Oneproduct'
import Product from '../Product/Product'
import styless from './style1.module.css'

export default function Allproduct({products, deleteHandler1}) {
  console.log('allproduct', styless)
  return (
    <>
    {/* <div>Allproduct</div> */}
    <div className={styless.Allproduct} >
    {products.map((products)=> <Oneproduct key={products.myId} products={products} deleteHandler1={deleteHandler1}/>)}
    </div>
    </>
    
  )
}
