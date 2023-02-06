const colors = require("colors")
const express = require("express") //Traer el modulo de express y guardarlo
const server = express() //al ejecutar express crea un servidor y la creacion se almacena en app
const port = 3005

//el metodo .get de express se necesita para definir rutas para generar respuestas.
//la / se usa para representar la ruta inicial (algo asi como el path en react router) al estar parado sobre esa ruta, se respondera con una funcion.
//al tratrar de responder a un usuario necesitara nos parametros el request y el response
server.get("/",(req,res) => {
  res.send("<h1>Hola mundo con express y nodejs</h1>")
})

server.listen(port, ()=>{
  console.log("-------------------------------------------")
  console.log("Server on port 3005:".green, "http://localhost:3005/".white)
  console.log("-------------------------------------------")
})
