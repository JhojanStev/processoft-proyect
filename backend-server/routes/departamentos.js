/*Ruta /api/cotizacion
*/
const {Router} = require('express');
const { getDepartamento, postDepartamento } = require('../controllers/departamentos');


const router = Router();


router.get('/', getDepartamento);
router.post('/', postDepartamento);



module.exports = router;
