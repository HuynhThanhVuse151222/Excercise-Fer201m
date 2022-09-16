import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
        <div id='header'> 
        
            <ul id='nav'> 
             
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#news'>New</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
        </div>
    )
  }
}
