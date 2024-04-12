const express= require('express');
const router=express.Router();
router.use('/summary',require('./summary'));
router.use('/hourly', require('./hourly'))
module.exports=router;