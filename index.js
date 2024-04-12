const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT_LOCAL|| 8000;
app.use(express.json());
const routes = require('./routes');
app.use((req, res, next) => {
    const { clientid, clientsecret } = req.headers;
    if (!clientid || !clientsecret) {
        return res.status(401).json({ error: 'Unauthorized: Missing credentials' });
    }
    // For simplicity, you can add further validation here if needed
    next();
});
app.use('/',routes);
app.listen(port,(err)=>{
    if(err){
        console.log('errpr',err);
        return;
    }
    console.log('server is running on port : ',port)
})