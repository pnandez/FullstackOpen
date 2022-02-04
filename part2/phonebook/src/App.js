import React, { useState } from 'react'
import DisplayPerson from './Components/DisplayPerson'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const checkIfNewPersonExists = (newPerson) => {
    return persons.some(person => person['name'] === newPerson['name'])
  }

  const addNewNameToPhoneBook = (event) =>{
    event.preventDefault()

    const newPerson = {
      name: newName
    }

    checkIfNewPersonExists(newPerson) ? window.alert(`${newPerson['name']} already exists`) :

    setPersons(persons.concat(newPerson))
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewNameToPhoneBook}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          debug: {newName}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <DisplayPerson key={person['name']} person={person} />)}
      </div>
    </div>
  )
}

export default App