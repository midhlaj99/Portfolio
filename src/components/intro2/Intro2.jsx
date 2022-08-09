import React from 'react'
import "./intro2.scss"
import Animated from "../Animated"

function intro2() {
  return (
    <div className='intro2' id='about'>
      <Animated />
      <div className='introshape'></div>
      <div className="left">
        <h3>About Me</h3>
        <p>
          Dedicated and experienced developer
          who has skilled in programming
          technologies like React,Javascript,Redux
          etc. and proven experience in creating
          and designing software in a test-driven
          environment.
        </p>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default intro2