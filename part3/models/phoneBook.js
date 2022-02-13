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

const phoneNumberValidator = (num) =>{
  if(!num.includes("-")){
    return num.length < 8
  }else{
    console.log("AAA");
  const splittedString = num.split("-")
  return !isNaN(splittedString[0]) &&
          !isNaN(splittedString[1]) &&
          splittedString[0].length >=2 &&
          splittedString[0].length <=3
}}

const phoneBookSchema = new mongoose.Schema({
  "name": {
    type: String,
    minlength: 5,
    required: true
  },
  "number": {
    type: String,
    required: true,
    validate: (num) =>{
              console.log("ASDASDDF");
              if(!num.includes("-")){
                console.log("if")
                return num.length > 8
              }else{
                console.log("AAA");
              const splittedString = num.split("-")
              return !isNaN(splittedString[0]) &&
                      !isNaN(splittedString[1]) &&
                      splittedString[0].length >=2 &&
                      splittedString[0].length <=3
            }},
    message: "Phone number not accepted"

  },
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
