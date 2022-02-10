require("dotenv").config()
const { request, response } = require('express')
const express = require('express')
const app = express()

const Phonebook = require("./models/phoneBook")

const morgan = require('morgan')
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.use(express.static('build'))

morgan.token('request-body', (req) => {
    return JSON.stringify(req.body)
})

const requestLogger = (req, res, next) => {
    console.log('--------------')
    console.log('Method:', req.method)
    console.log('Path:  ', req.path)
    console.log('Body:  ', req.body)
    next()
}


app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
        tokens['request-body'](req, res),
    ].join(' ').concat('\n--------------')

}))



app.get('/persons', (request,response) => {
  Phonebook.find({}).then(result => {
    response.json(result)
    
  })
  
})

app.get('/persons/:id', (request,response) => {
  Phonebook.findById(request.params.id)
    .then(result => {
      response.json(result)
    })
    .catch(error => next(error))
})

app.delete('/persons/:id', (request,response, next) => {
  Phonebook.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/persons', (request,response) => {
  const body= request.body

  if(!body.name || !body.number){
    return response.status(400).json({
      error: "Name or number missing"
    })
  }


  /* if(Phonebook.findOne({"name": body.name})){
    return response.status(400).json({
      error: "Person already exists in phonebook"
    })
  } */
  console.log(body)

  const person = new Phonebook({
    "name": body.name,
    "number": body.number,
  })

  person.save().then(savedPerson=>{
    response.json(savedPerson)
  })

  response.json(person)
})

app.put('/persons/:id', (request,response, next) => {
  const person = {
    "name": request.body.name,
    "number": request.body.number,
  }

  Phonebook.findByIdAndUpdate(request.params.id, person, { new: true })
  .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


app.get('/info', (request, response) => {
  response.send(`<div> <p>Phonebook has info for ${phonebook.length} people</p> <p>${new Date()}</p> </div>`)
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})