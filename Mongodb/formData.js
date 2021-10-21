const mongoose = require('mongoose')
const Schema = mongoose.Schema

let insertDataSchema= new Schema({
      "FormName": String,
      "FormDataField":{
            "Text": String,
            "Number": Number,
            "Date":Date,
            "TextArea": String
      }
})
module.exports = mongoose.model('formData',insertDataSchema)