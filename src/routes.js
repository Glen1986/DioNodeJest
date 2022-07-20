import { Router } from "express";
import { usersController } from "./controllers/usersController.js";

const routes = Router();


routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.crearUsuario )
// GET - leer datos,
// POST - crear datos,
// PUT/PATCH - editar datos,
// DELETE - borrar datos,

export { routes }
