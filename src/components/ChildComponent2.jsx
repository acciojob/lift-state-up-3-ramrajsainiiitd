import React from 'react'

export default function ChildComponent2(props) {
  return (
    <div className='child2' >
      <h3>Child Component 2</h3>
      <button onClick={()=>props.setSelectedOption('Option 2')} >Option 2</button>
    </div>
  )
}
