// const express = require("express")

// const server = express()

// server.listen(3001 ,()=>{
//     console.log("Server listening on port 3001")
// })


/*Aca importamos el servidor creado en el otro archivo y lo corremos */

const server = require("./server")

const db = require('./Models/index')

db.sequelize.sync({alter: true})
    .then(()=>{    
        server.listen(3001, ()=>{
            console.log("Server listening on port 3001")
        })
    })
.catch(err=>console.log('Error al sincronizar Base de Datos',err.message))