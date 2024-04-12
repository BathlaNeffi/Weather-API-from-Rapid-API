const express=require('express');
const router=express.Router();
const weatherSummaryController=require('../../../../controller/api/v1/weather_api');

router.get('/:city',weatherSummaryController.weatherByCity);
module.exports=router;