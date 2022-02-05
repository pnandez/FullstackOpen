import React, { useState, useEffect } from 'react'
import DisplayPerson from './Components/DisplayPerson'
import FilterPerson from './Components/FilterPerson'
import NewPersonForm from './Components/NewPersonForm'
import Persons from './Components/Persons'
import axios from 'axios'

const App = () => {
  
  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  useEffect(() => {
    const promise = axios.get("http://localhost:3001/persons")
    promise.then(response => {
      setPersons(response.data)
    })
  }, [])

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

  const inputs = {
    name: newName,
    handleName: handleNameChange,
    phone: newPhone,
    handlePhone: handlePhoneChange
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterPerson filterInput={nameToSearch} handleFilterInput={handleNameToSearchChange} />
      <h2>Add new</h2>

      <NewPersonForm formOnSubmit={addNewNameToPhoneBook} inputs={inputs} />
      
      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App