import React from 'react'
import './showdata.css'

function Showdata(props) {
  return (
    <>
        <div className='data-container'>
            <div className='items'>
               {props.task}
            </div>
            <div className='button'>
                <button onClick={() => {props.onSelect(props.id)}}>❌</button>
            </div>
        </div>
    </>
  )
}

export default Showdata
