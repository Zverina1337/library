import mongodb from "mongodb";
const URL = "mongodb://localhost:27017/";
const mongoClient = new mongodb.MongoClient(URL, {
	useUnifiedTopology: true
});

mongoClient.connect(async (error, mongo)=>{
    if(!error){
        console.log(`Connected to ${URL}`);
        let DB = mongo.db("MyDB");
        let users = DB.collection("users");
        let prods = DB.collection("prods");

        let res = await users.find().toArray();
        console.log(res);
        res = await prods.find().toArray();
        console.log(res);
    }else{
        console.log(error);
    }
});