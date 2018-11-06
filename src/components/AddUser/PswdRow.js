import React from 'react'

export default function PswdRow(props) {
  const {label} = props
  return (
    <td>
      <td><b>{label}</b></td>
      <td>&nbsp;</td>
      <td>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
          style={{width: '300px'}}
        />
      </td>
    </td>
  )
}