const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const FormData = require('../Mongodb/formData')
router.use(express.urlencoded({extended: true}));
router.use(express.json())


const postData = async function(req,res,next){
      const DataInsert = new FormData(req.body)
      console.log(DataInsert)

      try{
            let insertedData = await DataInsert.save()
           return res.json(insertedData)
      }
      catch(err){
            res.send(err)
          console.log('aaa')

      }

      }
console.log('turag')

router.post('/insertData',postData)


module.exports = router