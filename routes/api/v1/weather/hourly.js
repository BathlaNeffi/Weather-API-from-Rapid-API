const express=require('express');
const router=express.Router();
const hourlyWeatherControler=require('../../../../controller/api/v1/weather_api');
router.get('/:city',hourlyWeatherControler.weatherByHourly);
module.exports=router;