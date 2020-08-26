import React, { Component } from 'react'
import { init } from 'ityped'
import './App.css'
  
  export default class Hello extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { 
        showCursor: false,
        loop: true,
        strings: ['Creative (•◡•)', 'Focused (~˘▾˘)~', 'Decided ˙ ͜ʟ˙'],
        typeSpeed: 100,
        startDelay: 500,
        backDelay: 500
      })
    }
    render(){
      return (
        <div className="App">
          <h1>Web Developer</h1>
          <p id="myElement"></p>
        </div>
      )
    }
  }