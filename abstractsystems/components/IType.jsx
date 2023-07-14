"use client"
import React, { Component } from 'react'
import { init } from 'ityped'

export default class MainText extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, backDelay:1000, strings: ['Design...', 'Code... ','Launch... ' ] })
  }
  render(){
    return <div id="myElement"></div>
  }
}