require('dotenv').config()
const process = require('process')
const express = require('express')
const app = express()

const Phonebook = require('./models/phoneBook')

const morgan = require('morgan')
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.use(express.static('build'))

morgan.token('request-body', (req) => {
    return JSON.stringify(req.body)
})



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

app.get('/persons/:id', (request,response, next) => {
    Phonebook.findById(request.params.id)
        .then(result => {
            response.json(result)
        })
        .catch(error => next(error))
})

app.delete('/persons/:id', (request,response, next) => {
    Phonebook.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/persons', (request,response,next) => {
    const body= request.body

    if(!body.name || !body.number){
        return response.status(400).json({
            error: 'Name or number missing'
        })
    }
    console.log(body)

    const person = new Phonebook({
        'name': body.name,
        'number': body.number,
    })

    person.save().then(savedPerson=>{
        response.json(savedPerson)
    })
        .catch(error => next(error))
})

app.put('/persons/:id', (request,response, next) => {
    const person = {
        'name': request.body.name,
        'number': request.body.number,
    }

    Phonebook.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})


app.get('/info', (request, response) => {
    response.send(`<div> <p>Phonebook has info for ${Phonebook.length} people</p> <p>${new Date()}</p> </div>`)
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})