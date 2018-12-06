import React from 'react'

const Work = ({title}) => (
  <div
  style={{
    fontFamily: 'Arial'
  }}
  >
    <span
      style={{
        fontWeight: 'bold'
      }}
    >Title</span>
    <br/>
    {title}
    <br/>
    <br/>
  </div>
)

export default Work
