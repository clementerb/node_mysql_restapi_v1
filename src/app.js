import express         from 'express'
import indexRoutes     from './v1/routes/index.routes.js'
import employeesRoutes from './v1/routes/employees.routes.js'

const app = express();      // definicion del app
app.use( express.json() )   // reconocer peticiones en json

app.use( indexRoutes )
app.use( '/api/v1', employeesRoutes)
app.use( (req, res, next) => {res.status(404).json({message: 'endpoint not found'}) })

export default app;