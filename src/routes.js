import { Router } from "express";

const routes = Router();

const database = ['hola']

routes.get('/users',(req, res)=>{ 
  return res.status(200).json(database)
})
routes.post('/users', (req, res) => {
  const body = req.body
    console.log(body);
  return res.json(body)
  // console.log(req.body)
})
// GET - leer datos,
// POST - crear datos,
// PUT/PATCH - editar datos,
// DELETE - borrar datos,

export { routes }
