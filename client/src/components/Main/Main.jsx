import React from 'react'

export default function Main({gift, getGift}) {
  return (
    <>
      <h4>Привет</h4>
      <img src="./images/2.gif" className="card-img-top" alt="..." height='30px'/>
      <p>Это сайт единных скидок. </p>
       <p>Если хочешь узнать секретные скидки, зарегистрируйся.</p>
       <p>Рады, что вы с нами! Нас много!</p>
       <img src="./images/2.gif" className="card-img-top" alt="..." height='30px'/>
       <button class="btn btn-secondary" onClick={getGift}>Получи своего котика</button>
        <img src={gift} height='300px' width='250px'></img> 
    </>
  )

}
