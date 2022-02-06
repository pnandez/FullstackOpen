import React, { useState, useEffect } from 'react'
import DisplayPerson from './Components/DisplayPerson'
import FilterPerson from './Components/FilterPerson'
import NewPersonForm from './Components/NewPersonForm'
import Persons from './Components/Persons'
import phoneBook from './Services/PhoneBook'

const App = () => {
  
  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')

  useEffect(() => {
    
    phoneBook.getAll()
    .then(person => {
      setPersons(person)
    })
  }, [])

  const checkIfNewPersonExists = (newPerson) => {
    return persons.some(person => person['name'] === newPerson['name'])
  }

  const addNewNameToPhoneBook = (event) =>{
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newPhone,
      id: persons[persons.length].id +1
    }



    checkIfNewPersonExists(newPerson) ? window.alert(`${newPerson['name']} already exists`) :
    phoneBook.create(newPerson).then(person =>{
       setPersons(persons.concat(person))
        setNewName("")
        setNewPhone("")
      })
    
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

  const handleDeletePerson = id =>{
    const personToDelete = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      phoneBook.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id ))
    }
    
  }

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
      <Persons personsToShow={personsToShow} handleDelete={handleDeletePerson} />
    </div>
  )
}

export default App