// curso-tutorial de: https://www.youtube.com/watch?v=3dSkc-DIM74&t=629s
// FAZT
import  app  from './app.js'
import { APP_NAME, APP_PORT } from '../config.js'

app.listen (APP_PORT);
console.log (APP_NAME , 'escuchando en el puerto:', APP_PORT);
