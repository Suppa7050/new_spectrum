const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url="mongodb+srv://user1:kmit1@cluster0.p5fljm2.mongodb.net/ShikshaEkikaran";
mongoose.connect(url, {useNewUrlParser:true}).then(console.log('Database Connected'));

const db=mongoose.connection;
db.once('open', async()=>{
    const collection = db.collection('Users');
    const data = await collection.find({}).toArray();
    console.log(data);
});