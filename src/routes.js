import { Router } from "express";

const routes = Router();

const database = ['hola']

routes.get('/users',(req, res)=>{ 
  return res.status(200).json(database)
})
routes.post('/users', (req, res) => {
  const {name} = req.body
    database.push(name)
    // console.log(database);
  const respuesta =res.status(201).json({'mensage': `usuario ${name} creado`})
  return respuesta
})
// GET - leer datos,
// POST - crear datos,
// PUT/PATCH - editar datos,
// DELETE - borrar datos,

export { routes }
