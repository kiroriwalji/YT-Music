import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <>
    <div className="nav">
      <div className="nav-1">
      <div className="nav-icon">
      <i class="fa-solid fa-bars"></i>
      </div>
      <div className="nav-logo">
        <link to="" />
        <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt=""/>
      </div>
      
      </div>
      <div className="nav-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search"  placeholder="Search for songs, artists, or albums"/>
      </div>
      <div className="nav-login">
        <div className="circle"></div>
      </div>
    </div>
    </>
  )
}

export default Header