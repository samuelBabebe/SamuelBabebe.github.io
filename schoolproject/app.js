let express= require('express')
let mongoose = require('mongoose')
let classroomRouter = require('./router/classRoom')
let userRouter = require('./router/user')
let server = express()

mongoose.connect('mongodb://localhost:27020/classRoomProject',err=>{
    if(err){
        console.log('DB not connected')
    }else{
        console.log('DB connected')
    }
})

server.use(express.json())

server.use('/rooms',classroomRouter)
server.use('/users',userRouter)

server.use('*',(req,res,next)=>{
    next( new Error('the API is not known'))
})

server.use((err,req,res,next)=>{
    
        res.status(404).send(err.message)
    
})

server.listen(3000,()=>console.log('listening 2500...'))

