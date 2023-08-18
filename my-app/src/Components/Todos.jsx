import React from 'react'

function Todos({key,title,status}) {
  return (
    <div className='Todos'>
      <h2>{title}</h2>
      <p>{status ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}

export default Todos
