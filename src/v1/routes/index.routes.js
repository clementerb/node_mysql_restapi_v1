import pkg from 'express';
import { ping } from '../controllers/index.controller.js'
const router = pkg.Router()

// entrada en modo asincrona !!
router.get('/ping', ping)
      .get('/hello', (req, res) => { 
          res.send('Hello, '+req.query.person)
                console.log('query  :'); console.log(req.query);
                console.log('headers:'); console.log(req.headers);
                console.log('body   :'); console.log(req.body);
                console.log('params :'); console.log(req.params);
} )  


export default router
