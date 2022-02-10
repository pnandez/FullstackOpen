const res = require('express/lib/response')
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://pnandez:${password}@cluster0.ois5o.mongodb.net/phoneBook?retryWrites=true&w=majority`

mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  "name": String,
  "number": String,
  "id": Number,
})

const Phonebook = mongoose.model('Phonebook', phoneBookSchema)

if(process.argv.length > 3) {
  const person = new Phonebook({
  "name": process.argv[3],
  "number": process.argv[4],
  "id": Math.floor(Math.random()*2000)
})
  person.save().then(result => {
    console.log(`Added ${result.name} with number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}

if(process.argv.length === 3){
  Phonebook.find({}).then(result => {
    result.forEach(person =>{
      console.log(person)
    })
    mongoose.connection.close()
  })

}


