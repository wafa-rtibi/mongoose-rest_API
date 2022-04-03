require('dotenv').config()
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json())
const PORT=process.env.PORT || 7250 ;
const connectDB=require('./config/db')
// connecter base de données//
connectDB()
app.use('/api',require('./routes/contact'))
app.listen(PORT, err=> err? console.log(err) :
console.log(`server running at ${PORT}`))
