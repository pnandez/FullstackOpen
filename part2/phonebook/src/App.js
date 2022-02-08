import React, { useState, useEffect } from 'react'
import './App.css'
import FilterPerson from './Components/FilterPerson'
import NewPersonForm from './Components/NewPersonForm'
import Notification from './Components/Notification'
import Persons from './Components/Persons'
import phoneBook from './Services/PhoneBook'
import Error from './Components/Error'

const App = () => {
  
  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameToSearch, setNameToSearch] = useState('')
  const [notificationMessage, setNotificationMessage]  = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    
    phoneBook.getAll()
    .then(person => {
      setPersons(person)
    })
  }, [])

  const checkIfNewPersonExists = (name) => {
    return persons.some(person => person['name'] === name)
  }

  const addNewNameToPhoneBook = (event) =>{
    event.preventDefault()
    if(!checkIfNewPersonExists(newName)){
      const newPerson = {
        name: newName,
        number: newPhone,
      }

      phoneBook.create(newPerson).then(person =>{
        setPersons(persons.concat(person))
        setNotificationMessage(`${newPerson.name} added succesfully!`)
      setTimeout(() => setNotificationMessage(null), 5000)
      })
    } else if(window.confirm(`Edit ${newName}'s phone?`) ){
      const newPerson = {
        name: newName,
        number: newPhone,
        id: persons.find(person => person.name === newName).id
      }
      phoneBook.update(newPerson.id,newPerson)
      .then(newPerson=> {setPersons(persons.map(person => person.id === newPerson.id? newPerson : person))
      setNotificationMessage(`${newPerson.name} updated succesfully!`)
      setTimeout(() => setNotificationMessage(null), 5000)
    }
    ).catch(error => {
                    setErrorMessage(
                        `${ newPerson.name } was already removed from server`,)
      })}
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
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
        <FilterPerson filterInput={nameToSearch} handleFilterInput={handleNameToSearchChange} />
      <h2>Add new</h2>

      <NewPersonForm formOnSubmit={addNewNameToPhoneBook} inputs={inputs} />
      
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDeletePerson} />
    </div>
  )
}

export default App