const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const FormHeader = require('../Mongodb/formHeader')
router.use(express.urlencoded({extended: true}));
router.use(express.json())


const postHeader = async function(req,res,next){
      const DataInsert = new FormHeader(req.body)
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

router.post('/insert',postHeader)


module.exports = router



