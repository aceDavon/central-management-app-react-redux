import React from 'react'

const CommonInput = ({type, placeholder, sx, name, onchange}) => {
  return (
    <input type={type} className={sx} placeholder={placeholder} name={name} onChange={onchange}/>
  )
}

export default CommonInput