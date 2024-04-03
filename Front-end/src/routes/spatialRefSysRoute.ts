import SpatialRefSysController from '../controller/SpatialRefSysController';

var express = require('express')
const router = express.Router();

router.get('/spatial_ref_sys', SpatialRefSysController.getSpatialRefSys);


export default router;
