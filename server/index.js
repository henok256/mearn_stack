const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://henok256:henok256@cluster0.t9wn9o8.mongodb.net/mern")
const UserModel= require('./models/Users');
app.use(express.json());
app.use(cors());
const PORT = 3001;

app.get('/getUsers', async (req, res)=>{
   
    try{
        const users = await UserModel.find();
        res.json(users);
    }
    catch (error){
        res.status(500).send(error);
    } 
});

app.post('/createUser', async (req, res)=>{
    try{
        
        const newUser = new UserModel(user);
        await newUser.save();
  
        res.json(user);
    }
    catch (error){
        res.status(500).send(error);
    }
      
      
});
app.delete('/users/:id', async (req, res)=>{
    const _id = req.params.id;
    try{
        const user= await UserModel.findByIdAndDelete({_id})
        if(user){
            res.status(200).json({
                success: true,
                message: 'successfully deleted'
            });
        } else{
            res.status(404).json({
                message:"the user not found",
                success:false
            });
        }
    } catch (error) {
       res.status(500).send(error)
    }
});


app.listen(PORT, ()=>{
    console.log(`server runs on port ${PORT}`);
});




