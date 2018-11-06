import React from 'react'

export default function NameRow(props) {
  const {label} = props
  return (
    <td>
      <td><b>{label}</b></td>
      <td style={{width: '32px'}}></td>
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