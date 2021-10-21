const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const formHeader = require('../Mongodb/formHeader')
const router = require('./insertHeader')
const formData = require('../Mongodb/formData')

router.use(express.urlencoded({extended: true}));
router.use(express.json())

//getHeaderData
const getHeaderData = async (req,res,next)=>{
      try{
            const formName = req.params.formName
            console.log(formName)
            //let getHeaderData = await formHeader.find()
            let getHeaderData = await formHeader.aggregate(
                  [
                      
                      {
                         $match: {formName:formName}
                      },
                      {
                          $project:{
                              _id:0
                          }
                      }
         
                  ]
              )
              res.send(JSON.stringify({getHeaderData}))

      }catch(err){
            res.send(JSON.stringify({err}))
      }
}

//getFieldData

const getFieldData = async (req,res,next)=>{
      try{
            const formName = req.params.formName
            let getFormData = await formData.aggregate(
                  [
                      
                      {
                         $match: {FormName:formName}
                      },
                      {
                          $project:{
                              _id:0
                          }
                      }
         
                  ]
              )
              res.send(JSON.stringify({getFormData}))
              console.log(getFormData)

      }catch(err){
            res.send(JSON.stringify({err}))
      }
}

//getOnlyFormName
const getFormName = async (req,res,next)=>{
    try{

          let getFormName = await formHeader.find({},'formName')          
            res.send(JSON.stringify({getFormName}))

    }catch(err){
          res.send(JSON.stringify({err}))
    }
   
}



router.get('/getHeader/:formName',getHeaderData).get('/getData/:formName',getFieldData).get('/getFormName',getFormName)

module.exports = router