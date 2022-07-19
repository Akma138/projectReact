import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display: 'flex', marginTop: '20px', marginLeft: '10px'}}>
    <Link to='/' type="button" class="btn btn-secondary">Главная</Link>
    <Link to='/registration' type="button" class="btn btn-secondary">Регистрация</Link>
    <Link to='/allusers' type="button" class="btn btn-secondary">Пользователи</Link>
    <Link to='/goods' type="button" class="btn btn-secondary">Товары</Link>
    <Link to='/blog' type="button" class="btn btn-secondary">Блог</Link>
    </div>
  )
}
