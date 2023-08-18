import { pool } from '../db.js'
//-----------------------------------------------------
export const getAllEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query ('SELECT * FROM EMPLOYEES')
    res.json(rows)
    console.log('getAllEmployees ' + Date())
    console.log(rows)
  }
  catch (error) {
    res.json({ 'message': error.message })
  }
}
//-----------------------------------------------------
export const getOneEmployee = async (req, res) => {
  // throw new Error ('something is wrong !')
  try {
    const [rows] = await pool.query ('SELECT * FROM EMPLOYEES WHERE id = ?', [req.params.id])
    if (rows.length <= 0){
        console.log('getOneEmployee Not Found :' + [req.params.id] + Date() )
        return res.status(404).json({message: 'getOneEmployee ['+ [req.params.id] +'] Not Found'})
    }
    res.json(rows[0])
    //res.json(rows)
    console.log('getOneEmployee:'+ Date()) ;     console.log(rows)
  }
  catch (error) {
    res.json({ 'message': error.message })
  }
}
//-----------------------------------------------------
// debe crearse funcion asincrona para operar en la bd
export const createOneEmployee = async (req, res) => {
  try {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?,?)', [name, salary])
    console.log('createOneEmployee'+ Date());  console.log(rows)
    res.send({
      idd: rows.insertId,
      affected: rows.affectedRows,
      name,
      salary
    })
  
  } catch {  
    res.json({ 'message': error.message })  
  }
}
//-----------------------------------------------------
export const updateOneEmployee = async (req, res) => {
  const [id] = [req.params.id]
  if (isNaN(id))
    return res.status(201).json ({message: 'updateOneEmployee not a NUM: '+id}); 
  
  const {name, salary} = req.body
  try {
    const [result] = await pool.query('UPDATE EMPLOYEES SET name = IFNULL(?, name),salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

    if (result.affectedRows <= 0)
      return res.status(404).json ({message: 'updateOneEmployee not found: '+id}) 
 
    res.json ({message: 'updateOneEmployee OK', id: id}) ; 
    console.log('updateOneEmployee: '+ Date())
  } catch (error) {
    res.json({ 'message': error.message })
  }
}
//-----------------------------------------------------
export const deleteOneEmployee = async (req, res) => {
  try {
    console.log('eliminar: '+[req.params.id])
    const [result] = await pool.query ('DELETE FROM EMPLOYEES WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0)
        return res.status(404).json({message: 'deleteOneEmployee ['+ [req.params.id] +'] Not Found'})

    console.log('deleteOneEmployee OK: ' + [req.params.id] + Date())
  } catch (error) {
    res.json({ 'message': error.message })
  }
}