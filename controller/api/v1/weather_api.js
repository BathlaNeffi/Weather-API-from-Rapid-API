const axios= require('axios')

module.exports.weatherByCity=async(req,res)=>{
    try {
            const { city } = req.params;
              const response = await axios.get(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/summary/`, {
                headers: {
                  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                  'x-rapidapi-host': 'forecast9.p.rapidapi.com',
                  'useQueryString': true
                }
              });
              return res.status(200).json({
                data:response.data
              });

    } catch (error) {
      console.error('Error fetching weather summary:', error.respose.message);
        return res.status(error.response.status || 500).json({ error: 'An error occurred while fetching weather summary' });
    }
}


module.exports.weatherByHourly=async(req,res)=>{
    try {
        const { city } = req.params;
        const response = await axios.get(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/hourly/`, {
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'forecast9.p.rapidapi.com',
            'useQueryString': true
        }
    });
    return res.status(200).json({
      data:response.data
    });
        
    } catch (error) {
        console.log('Error fetching hourly weather forecast:',error.response.data)
        return res.status(error.response.status || 500).json({ error: 'An error occurred while fetching hourly weather forecast' });
    }
}