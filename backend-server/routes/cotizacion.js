/*Ruta /api/cotizacion
*/
const {Router} = require('express');
const { getCotizacion, postCotizacion } = require('../controllers/cotizacion');


const router = Router();


router.get('/', getCotizacion);
router.post('/', postCotizacion);



module.exports = router;
