import React from 'react'

export default function AddButton(props) {
  return (
    <tr>
      <td>
        &nbsp;
        <button
          onClick={(e) => props.onClick(e)}
        >Add User
        </button>
      </td>
    </tr>
  )
}
