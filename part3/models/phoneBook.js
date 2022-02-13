const mongoose = require("mongoose")

const url = process.env.MONGODB_URI
console.log("connecting to ", url)

mongoose.connect(url)
  .then(result=>{
    console.log("Connected succesfully!");
  })
  .catch((error)=>{
    console.log("Could not connect ", error)
  })

const phoneBookSchema = new mongoose.Schema({
  "name": {
    type: String,
    minlength: 5,
    required: true
  },
  "number": String,
  "id": Number,
})

phoneBookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Phonebook', phoneBookSchema)
