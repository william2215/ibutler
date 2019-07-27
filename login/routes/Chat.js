const express = require("express")
const chat = express.Router()
const cors = require("cors")
const Fails = require('../models/Fails')
const Felicidad = require('../models/Felicidad')
const Aburrido = require('../models/Aburrido')
const Depresivo = require('../models/Depresivo')
const Desmotivado = require('../models/Desmotivado')
const Tristeza = require('../models/Tristeza')
const Detallecita = require('../models/Detalle_cita')


chat.use(cors())

chat.post("/", (req, res) => {
    let vector = []
    let id = req.body.idenficador
    let value1 = req.body.body
    let value2= req.body.entidad
    vector.push(id)
    vector.push(value1)
    vector.push(value2)
    console.log(vector)
  
    const fails = {
        palabra : value1,
        entidad: value2
    }

    if(vector[2] == 'input.unknown'){
        Fails.create(fails)
        .then(falla =>{
            res.send('logrado')
            console.log(falla)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }
    if(vector[2] == 'smalltalk.user.happy'){

         Felicidad.findAll({
            attributes: ['entidad'],
            where : {id : id}
          }).then(resultado => {
            vector.push(resultado[0].entidad)
            console.log(vector[3])
            Felicidad.update(
                {
                     entidad:  vector[3] + 1 
                    }, 
                {  where: 
                    { id: id }
                } 
            )
            .then(result => {
              res.send("funcion")
            })
            .catch(error => {
                 res.send('error: ' + error)
            })
          })
          .catch(err => {
              res.send('error' + err)
          })
    }
    
    if(vector[2] == 'smalltalk.user.bored'){

        Aburrido.findAll({
           attributes: ['entidad'],
           where : {id : id}
         }).then(Aburridox => {
           vector.push(Aburridox[0].entidad)
           console.log(vector[3])
           Aburrido.update(
               {
                    entidad:  vector[3] + 1 
                   }, 
               {  where: 
                   { id: id }
               } 
           )
           .then(result => {
             res.send("funcion bored")
           })
           .catch(error => {
                res.send('error: ' + error)
           })
         })
         .catch(err => {
             res.send('error' + err)
         })
   }

   if(vector[2] == 'smalltalk.user.sad'){

    Tristeza.findAll({
       attributes: ['entidad'],
       where : {id : id}
     }).then(sadnes => {
       vector.push(sadnes[0].entidad)
       console.log(vector[3])
       Tristeza.update(
           {
                entidad:  vector[3] + 1 
               }, 
           {  where: 
               { id: id }
           } 
       )
       .then(result => {
         res.send("funcion sad")
       })
       .catch(error => {
            res.send('error: ' + error)
       })
     })
     .catch(err => {
         res.send('error' + err)
     })
}
})

chat.post("/graficar",  (req, res) => {
    var vector = []
    Detallecita.findOne({
        where : {id_usuario : req.body.id}
    }).then(respuesta => {
        Felicidad.findOne({
            where : {id : respuesta.id_cita}
        }).then(respuestafelicidad => {
            vector.push(respuestafelicidad.entidad)
            Tristeza.findOne({
                where: {id : respuesta.id_cita}
            }).then(respuestatriste => {
                vector.push(respuestatriste.entidad)
                Desmotivado.findOne({
                    where : {id : respuesta.id_cita}
                }).then(demotiva => {
                    vector.push(demotiva.entidad)
                    Aburrido.findOne({
                        where : {id : respuesta.id_cita}
                    }).then(aburrido => {
                        vector.push(aburrido.entidad)
                        Depresivo.findOne({
                            where : {id : respuesta.id_cita}
                        }).then(depresion =>  {
                            vector.push(depresion.entidad)
                            res.send(vector)
                        })
                    })
                })
            })
        })
    })
 
})




module.exports = chat