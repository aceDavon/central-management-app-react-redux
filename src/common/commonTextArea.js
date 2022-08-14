import React from 'react'

const CommonTextArea = ({sx, cols, rows, name, placeholder, onchange}) => {
  return (
    <textarea name={name} id="" cols={cols} rows={rows} className={sx} placeholder={placeholder} onChange={onchange}></textarea>
  )
}

export default CommonTextArea