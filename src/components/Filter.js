import React from 'react'

const Filter = (props) => {
  return (
    <div>
      <select name="name" id="name" onChange={(event) => props.handleChange(event.target.value)}>
        <option value="name-asc">Name ASC</option>
        <option value="name-dsc">Name DSC</option>
      </select>
      <select name="weight" id="weight" onChange={(event) => props.handleChange(event.target.value)}>
        <option value="weight-asc">Weight ASC</option>
        <option value="weight-dsc">Weight DSC</option>
      </select>
      <select name="greased" id="greased" onChange={(event) => props.handleChange(event.target.value)}>
        <option value="true">Greasy</option>
        <option value="false">Not Greasy</option>
      </select>
      <button onClick={() => props.handleClick()}>Sort</button>
    </div>
  )
}

export default Filter
