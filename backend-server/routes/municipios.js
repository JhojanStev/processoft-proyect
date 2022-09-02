/*Ruta /api/cotizacion
*/
const {Router} = require('express');
const { getMunicipio, postMunicipio } = require('../controllers/municipios');


const router = Router();


router.get('/', getMunicipio);
router.post('/', postMunicipio);



module.exports = router;
