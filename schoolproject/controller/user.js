let userModel = require('../models/user')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let privetKey = "dhbadbedsefb emj bej"


exports.registerUser = async (req,res)=>{
   const {code,name,password,role} = req.body
   if(code&&name&&password&&role){
       try{
        let hashPassword=bcrypt.hashSync(password,10)
        let user = new userModel(code,name,hashPassword,role)
        let result =  await user.userRegister()
        res.send(result)  
       }catch(err){
           res.status(500).json(`${err}`)
       }
             
   }else{
       res.send('please insert the data') 
   }
  
}



exports.getUsers = async (req,res)=>{
    let user = new userModel()

    let allUsers = await user.getUsers()
    if(allUsers){
        res.send(allUsers)
    }else{
        res.send('there is no registered user')
    }
    
}
exports.getEachUser = async (req,res)=>{
    let userCode = req.params.code
    if(userCode){
        let user = new userModel()
        let thisUser = await user.findOneUser(userCode)
        if(thisUser){
            res.send(thisUser)
        }else{
            res.send('this user is not registered') 
        }
    }
    
}

exports.deleteEachUser = async (req,res)=>{
    let userCode = req.params.code
    if(userCode){
        let user = new userModel()
        let result = await user.deleteUser(userCode)
        res.send(result)
    }else{
        res.send('please insert the user code you want to delete')
    }
}

exports.updateEachUser= async (req,res)=>{
    let userCode = req.params.code
    const {code,name,password,role} = req.body
    if(userCode){
        let user = new userModel(code,name,password,role)
        let result = await user.updateUser(userCode)
        res.send(result)
    }else{
        es.send('please insert the user code you want to update')
    }
}

exports.login =async (req,res)=>{
    const {code,password} = req.body
    if(code &&password){
        let users = new userModel()
        let user = await users.findOneUser(code)
        
        
        if(user!=="this user is not registered"){
            let userPassword = user[0].password
            let compare =   await bcrypt.compare(password,userPassword)
            if(!compare){
                res.send('your password is incorrect')
            }else{
                let role = user[0].role
                let accessToken = jwt.sign({code:code,role:role},privetKey,{expiresIn:"60m"})
                res.json(accessToken)
            }
        }else{
            res.send(user)
        }
       
    }else{
        res.send('please insert your name and password')
    }
}

exports.Autorization = (req,res,next)=>{
    let authHead = req.headers.authorization
    if(authHead){
        let Token = authHead.split(' ')[1]
        jwt.verify(Token,privetKey,(err,user)=>{
            if(err){
                res.status(403).send('eror: forbiden')
            }
            req.user = user
            next()
        })
    }else{
        res.status(401).send('eror, unautorized')
    }
}

exports.adminAutorization =(req,res,next)=>{
    if(req.user.role==="admin"){
        next()
    }else{
        res.status(401).send('eror: unautorized user')
    }
}

exports.userAutorization = (req,res,next)=>{
    if(req.user.role==="user"){
        next()
    }else{
        res.status(401).send('eror: unautorized')
    }
}