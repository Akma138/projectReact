import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display: 'flex', marginTop: '20px', marginLeft: '10px'}}>
    <Link to='/' type="button" class="btn btn-secondary">Главная</Link>
    <Link to='/registration' type="button" class="btn btn-secondary">Регистрация User</Link>
    <Link to='/allusers' type="button" class="btn btn-secondary">Пользователи</Link>
    <Link to='/product' type="button" class="btn btn-secondary">Регистрация товара</Link>
    <Link to='/allproduct' type="button" class="btn btn-secondary">Все товары</Link>
    <Link to='/oneproduct' type="button" class="btn btn-secondary">Карточка товара</Link>
    </div>
  )
}
