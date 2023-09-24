import React from 'react'
import './Error404.css'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='error404'>
        <div className='error-contenedor'> <nav class="shelf">
  <a class="book home-page">Home page</a>
  <a class="book about-us">About us</a>
  <a class="book contact">Contact</a>
  <a class="book faq">F.A.Q.</a>
  
  <span class="book not-found"></span>
 
  <span class="door left"></span>
  <span class="door right"></span>
</nav>
<h1>Error 404</h1>
<p>The page you're loking for can't be found</p>
<Link to='/'>
   <button className='error-button'>Return</button>
</Link>
        </div>
     

    </div>
  )
}

export default Error404
