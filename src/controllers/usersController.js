import {database} from "../database.js"

const usersController = {
  crearUsuario(req, res) { 
  const {name} = req.body

  if(name.length < 1){
    return res.status(403).json({mensage: 'no se permite usuario vacio'})
  }

  database.push(name)
  return res.status(201).json({'mensage': `usuario: ${name} creado`})
  },
  listarUsuario(req, res){ 
  return res.status(200).json(database)
  }
}
 export {usersController}
