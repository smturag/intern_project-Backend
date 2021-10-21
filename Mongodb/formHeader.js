const mongoose = require('mongoose')
const Schema = mongoose.Schema

let dataSchema = new Schema({
      "formName": String,
      "formField": {
            "Text":String,
            "Number":String,
            "Date":String,
            "TextArea":String
                 
            }
      }
)
module.exports = mongoose.model('FormHeader', dataSchema)