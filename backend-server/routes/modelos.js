/*Ruta /api/cotizacion
*/
const {Router} = require('express');
const { getModelo, postModelo } = require('../controllers/modelos');


const router = Router();


router.get('/', getModelo);
router.post('/', postModelo);



module.exports = router;
