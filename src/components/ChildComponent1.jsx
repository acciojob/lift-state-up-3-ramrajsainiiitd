import React from 'react'

export default function ChildComponent1(props) {
    console.log()
  return (
    <div className='child1' >
      <h3>Child Component 1</h3>
      <button onClick={()=>props.setSelectedOption('Option 1')} >Option 1</button>
    </div>
  )
}
