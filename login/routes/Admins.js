const express = require("express")
const admin = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Sicologo = require("../models/Sicologo")
const Detalledecita = require("../models/Detalle_cita")
const Fellings = require('../models/Fellings')
const Fails = require('../models/Fails')
const Felicidad = require('../models/Felicidad')
const Aburrido = require('../models/Aburrido')
const Depresivo = require('../models/Depresivo')
const Desmotivado = require('../models/Desmotivado')
const Tristeza = require('../models/Tristeza')
const Historial = require('../models/Historial')
const Userio = require('../models/User')


admin.use(cors())

process.env.SECRET_KEY = 'secret'

admin.post("/adminregister", (req, res) => {
    const userData = {
        cedula: req.body.cedula,
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Password: req.body.password
    }

    Sicologo.findOne({
        where: {
            cedula: req.body.cedula
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.Password, 10, (err, hash) => {
                    userData.Password = hash
                    Sicologo.create(userData)
                        .then(user => {
                            res.json({ status: user.cedula + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.send(user + ': ya existe')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

admin.post("/loginadmin", (req, res) => {
   
    
    Sicologo.findOne({
        where: {
            cedula: req.body.cedula
        }
    })
        .then(user => {
           
            if (user) {
                console.log(user.Password, req.body.password)
                if (bcrypt.compareSync(req.body.password, user.Password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})  

admin.post("/detalle", (req, res) => {

    const newdetalle = {
        id_cita: req.body.id_cita,
        id_usuario: req.body.id_usuario, 
        fails : req.body.id_cita,
        fellings : req.body.id_cita
    }
    const fellings = {
        id_sentimiento: req.body.id_cita,
        felicidad: req.body.id_cita, 
        triste : req.body.id_cita,
        aburrido : req.body.id_cita,
        desmotivado : req.body.id_cita,
        depresivo : req.body.id_cita
    }

    const felicidad = {
        id: req.body.id_cita
    }
    const aburrido = {
        id: req.body.id_cita
    }
    const depresivo = {
        id: req.body.id_cita
    }
    const desmotivado = {
        id: req.body.id_cita
    }
    const tristeza = {
        id: req.body.id_cita
    }
    const fails = {
        id: req.body.id_cita
    }

    

    Tristeza.create(tristeza)
    .then(triste => {
        Desmotivado.create(desmotivado)
        .then(desmotivacion => {
            Depresivo.create(depresivo)
            .then(depresion => {
                Aburrido.create(aburrido)
            .then(aburricion => {
                Felicidad.create(felicidad)
                .then(feliz => {
                    Fellings.create(fellings)
                    .then(sentimiento => {
                        Fails.create(fails)
                        .then(fallos => {
                            Detalledecita.create(newdetalle)
                            .then(detalle => {
                            res.json({ status: detalle.id_cita + ' registered' })
                            console.log(detalle.id_cita)
                                })
                                    .catch(err => {
                                    res.send('error: ' + err)
                                 })
                            }) 
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                        
                        }) 
                        .catch(err => {
                        res.send('error: ' + err) 
                    })
                })
                .catch(err => {
                    res.send('error' + err)
                })
            
            })
            .catch(err => {
                res.send('error' + err)
            })
            
        
            })
            .catch(err =>{
                res.send('error' + err)
            })
        })
        .catch(err => {
            res.send('error' + err)
        })
    })
    .catch(err => {
        res.send('error' + err)
    })
})

admin.post("/historial", (req, res) => {
    console.log('hola');
    
    const historia = {
        id_detalle_cita : req.body.id_cita,
        id_doctor : req.body.id_usuario
    }
    console.log(historia)
    Historial.create(historia)
    .then(creacion => {
        res.send(creacion)
    })
    .catch(err => {
        res.send('error' + err)
    })
})

admin.get("/agarrar", (req, res) => {
    Userio.findAll()
     .then(creacion => {
         console.log(creacion)
         res.send(creacion)
     })
     .catch(err => {
         res.send('error' + err)
  })
 })
 

module.exports = admin