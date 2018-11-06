import React, { useState } from 'react'
import NameRow from './NameRow'
import PswdRow from './PswdRow'
import AddButton from './AddButton'
import './styles.css'

var tempUser = ''
var allUsers = ''

export default function AddUser(props) {

  const userName = useInput('')
  const userPswd = useInput('')
  const [stateHolder, setAllUsers] = useState('')

  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return {value, handleChange}
  }

  function handleClick(e) {
    if ((allUsers.search(userName.value) === -1)) {
      tempUser += '| Name: ' + userName.value + ' | Password: ' + userPswd.value
      tempUser += '\r\n'
      allUsers += 'UserID: ' + Date.now() + ' ' + tempUser
      setAllUsers(allUsers)
      tempUser = ''
    }
  }

  return (
    <div style={{marginLeft: '40px'}}>
      <table style={{marginLeft: '28px'}}>
        <thead></thead>
        <tbody>
          <tr>
            <NameRow 
              type='text'
              label='Name: '
              {...userName}
            />
          </tr>
          <tr>
            <PswdRow 
              type='text'
              label='Password: '
              {...userPswd}
            />
            <AddButton
              onClick={handleClick}
            />
          </tr>
        </tbody>
      </table>
      <div>
        <div style={{float: 'top', marginTop: '10px'}}><b>User Database: </b></div>
        <div style={{marginTop: '-20px'}}>
          <textarea className='allusers' 
            value={allUsers}
          />
        </div>
      </div>
    </div>
  )
}