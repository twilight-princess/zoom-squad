const express = require('express')

const animalRouter = express.Router()
const Animal = require('../models/animal.js')

animalRouter.route('/')
    .get((req, res) => {
        Animal.find().exec((err, animal) => {
            if (err) {
                res.send(err)
            } else {
                return res.send({animal})
            }        
        })
    })
    .post((req,res) => {
        console.log(req.body)
        let animal = new Animal(req.body)
        animal.save((err) => {
            if (err) {
                res.send(err)
            } else {
                return res.send({status: true})
            }
        })
    })
animalRouter.route('/:id')
    .get((req, res) => {
        Animal.findOne({_id: req.params.id}, (err, animal) => {
            if (err) {
                res.send(err)
            } else {
                return res.send({status: true})
            }
        })
    })
    .put((req, res) => {
        Animal.findOneAndUpdate({_id: req.params.id}, req.body, (err, animal) => {
            if (err) {
                res.send(err)
            } else {
                return res.send({status: true})
            }
        })
    })
    .delete((req, res) => {
        Animal.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) {
                res.send(err)
            } else {
                return res.send({status: true})
            }
        })
    })

module.exports = animalRouter
