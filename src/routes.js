import { Router } from "express";

const routes = Router();

const database = ['hola']

routes.get('/users',(req, res)=>{ 
  return res.status(200).json(database)
})

routes.post('/users', (req, res) => {
  const {name} = req.body

  if(name.length < 1){
    return res.status(403).json({mensage: 'no se permite usuario vacio'})
  }
    database.push(name)
    // console.log(database);
  const respuesta =res.status(201).json({'mensage': `usuario: ${name} creado`})
  return respuesta
})
// GET - leer datos,
// POST - crear datos,
// PUT/PATCH - editar datos,
// DELETE - borrar datos,

export { routes }
