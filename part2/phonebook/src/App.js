import React, { useState } from 'react'
import DisplayPerson from './Components/DisplayPerson'

const App = () => {

  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  const checkIfNewPersonExists = (newPerson) => {
    return persons.some(person => person['name'] === newPerson['name'])
  }

  const addNewNameToPhoneBook = (event) =>{
    event.preventDefault()

    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length +1
    }

    checkIfNewPersonExists(newPerson) ? window.alert(`${newPerson['name']} already exists`) :

    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewPhone("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleNameToSearchChange = (event) => {
    setNameToSearch(event.target.value)
    event.target.value.length === 0 ? setShowAll(true) : setShowAll(false)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setNameToSearch("")
  }

  const personsToShow = showAll ? persons : persons.filter(person => person['name'].includes(nameToSearch))

  return (
    <div>
      <h2>Phonebook</h2>

        <div>search for: <input value={nameToSearch} onChange={handleNameToSearchChange}/></div>

      <h2>Add new</h2>
      <form onSubmit={addNewNameToPhoneBook}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => <DisplayPerson key={person['name']} person={person} />)}
      </div>
    </div>
  )
}

export default App