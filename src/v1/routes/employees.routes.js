// definicion de la ruta para employees
import pkg from 'express'
import { getAllEmployees,
         getOneEmployee,
         createOneEmployee, 
         updateOneEmployee, 
         deleteOneEmployee } 
         from '../controllers/employees.controller.js'

const router = pkg.Router()

// aqui se invocan las Funciones CRUD
router
  .get('/', (req, res) => {res.send("<h2>Hello !!")})
  .get('/employees',        getAllEmployees) 
  .get('/employees/:id',    getOneEmployee) 
  .post("/employees",       createOneEmployee)
  .patch("/employees/:id",  updateOneEmployee) 
  .delete("/employees/:id", deleteOneEmployee)

export default router