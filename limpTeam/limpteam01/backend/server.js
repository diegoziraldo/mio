require('dotenv').config();
const app = require ('./app');
const connectDB = require('./db/mongodb')
const {appConfig, dbConfig} = require('./config')


const initApp = async(appConfig, dbConfig)=>{
    try {
        await connectDB(dbConfig)
        app.listen(appConfig.port,()=>console.log(`Listen on port ${appConfig.port}`));
    } catch (error) {
            console.error(e)    
            process.exit(0)
    }
}

initApp(appConfig, dbConfig)