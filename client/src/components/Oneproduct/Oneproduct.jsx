import React from 'react'
import styless from './style2.module.css'

export default function Oneproduct({products, deleteHandler1}) {
  console.log('oneproduct')
  return (
    <>

     <div className={styless.product}></div>
    <div className="card" style={{width: '15rem', height: '20rem'}}>
    <img src="images/troley.png" style={{width: '8rem', height: '7rem'}} className="card-img-top" alt="..."/>
   <div className="card-body">
    <h5 className="card-title"style={{color: 'black'}}>{products.title ?? ''}</h5>
    <p className="card-text"style={{color: 'black'}}>{products.text ?? ''}</p>
    <p className="card-text"style={{color: 'black'}}>{products.price ?? ''}</p>
    <p className="card-text"style={{color: 'black'}}>{products.location ?? ''}</p>
    {/* <a href="#" className="btn btn-secondary">Go somewhere</a> */}
    <button onClick={()=> deleteHandler1(products.id)}  type="submit" className="btn btn-secondary">удалить</button>
    </div>
    </div>
    </>

  )
}


