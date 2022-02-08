const { request, response } = require('express')
const express = require('express')
const app = express()


const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())

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





let phonebook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/persons', (request,response) => {
  response.json(phonebook)
})

app.get('/persons/:id', (request,response) => {
  const id = Number(request.params.id)

  const person = phonebook.find(person => person.id === id)

  if(person){
    response.json(person)
  }else{
    response.status(404).end()
  }
})

app.delete('/persons/:id', (request,response) => {
  const id = Number(request.params.id)

  phonebook = phonebook.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/persons', (request,response) => {
  const body= request.body

  if(!body.name || !body.number){
    return response.status(400).json({
      error: "Name or number missing"
    })
  }
  if(phonebook.find(person => person.name === body.name)){
    return response.status(400).json({
      error: "Person already exists in phonebook"
    })
  }
  console.log(body);

  const person = {
    "name": body.name,
    "number": body.number,
    "id": generateID()
  }

  phonebook = phonebook.concat(person)

  response.json(person)
})

const generateID = () =>{
  let id = 0
  do{
    id =  Math.floor(Math.random()*200)
  }while(phonebook.find(person => person.id ===id))
  return id
}

app.get('/info', (request, response) => {
  response.send(`<div> <p>Phonebook has info for ${phonebook.length} people</p> <p>${new Date()}</p> </div>`)
})




const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
