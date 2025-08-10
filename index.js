const express =require('express');
const app = express();

app.get("/",(req,resp)=>{
    resp.send("App Is Working")
});

app.listen(5000)


// const express  = require('express');
// const app =express();

// app.get("/",(req,resp)=>{
//     resp.send("App Is Working");
// });

// app.listen(5000);

// ------------------------------------------------------------

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const connectDB= async()=>{
//     mongoose.connect('mongodb://localhost:27017/student')
//     const studentSchema = new mongoose.Schema({});
//     const student = mongoose.model('stud',studentSchema);
//     const data = await student.find();
//     console.warn(data);
// }
// connectDB();
// app.listen(5000);

// ------------------------------------------------------------

// const express = require('express');
// require('./db/config');
// const User = require('./db/User')
// const app = express();
// app.use(express.json());
// app.post("/register",(req,resp)=>{
//     resp.send("application is Progress ...");
// })

// app.post("/register",(req,resp)=>{
//     resp.send(req.body);
// })

// app.post("/register",async (req,resp)=>{
//     let user = new User(req.body);
//     let result = await user.save();
//     resp.send(result);

// });
// app.listen(5000);

// ------------------------------------------------------------