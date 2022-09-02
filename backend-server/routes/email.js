/*Ruta /api/cotizacion
*/
const {Router} = require('express');
const { postEmail } = require('../controllers/email');


const router = Router();


// router.get('/', getEmail);
router.post('/', postEmail);



module.exports = router;
