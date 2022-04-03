const mongoose=require('mongoose')

// connect database
const connectDB= async ()=>{ // async parce que chaque opérations avec la base de données prend du temps
        try {
            // step 1
            await mongoose.connect(process.env.DB_URI); // connect database 
            console.log('data base connected')
        } catch (error) {
            console.log('data base not connected')
            console.log(error)
        }
}

module.exports=connectDB