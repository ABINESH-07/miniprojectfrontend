import React, { Component } from 'react'
import './team.css'
import abc from './pic1.jpg'
import a from './pic3.jpg'
import ab from './pic2.jpg'
export default class Team
 extends Component {
  render() {
    return (
      <div class="tea">
      <h2>OUR TEAM</h2>

<div class="row">
  <div class="column">
    <div class="card">
    <img src={ab} alt="Jane" style={{height:200, width:200}}/>
    
    <div class="container">
    <h2>Jane Doe</h2>
    <p class="title">CEO & Founder</p>
    <br/>
    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    <p>example@example.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>
    </div>
    
    <div class="column">
    <div class="card">
    <img src={a} alt="Jane" style={{height:200, width:200}}/>
    
    
    <div class="container">
    <h2>Mike Ross</h2>
    <p class="title">Art Director</p>
    <br/>
    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    <p>example@example.com</p>
    <p><button class="button">Contact</button></p>
    </div>
    </div>
    </div>
    
    <div class="column">
    <div class="card">
    <img src={abc} alt="Jane" style={{height:200, width:200}}/>
  
    <div class="container" >
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <br/>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
