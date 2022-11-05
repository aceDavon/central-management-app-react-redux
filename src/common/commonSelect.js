import React from 'react'

const CommonSelect = ({sx, name, options, onchange}) => {

  return (
    <select name={name} id="" className={sx} onChange={onchange}>
      <option value="" defaultValue={''}>Select an option</option>
      {options.map((x, i) => {
        return (
          <option key={i} value={x.label}>{x.label}</option>
        )
      })}
    </select>
  )
}

export default CommonSelect