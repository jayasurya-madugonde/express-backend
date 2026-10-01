const app = require("./app");
const {connectDB} = require("./database");
const PORT = process.env.PORT || 4000;
const startServer = async () =>{
    try{
        await connectDB();  
        app.listen(PORT, () => {
            console.log('application is listening at the port number ',PORT);
        });
    }
    catch(error){
        console.log("MongoDB Connection Error", error);
        process.exit(1);
    }
}

startServer();