let mongoose = require('mongoose')

let userSchema= mongoose.Schema({
    code:{type:Number, required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
})

let userModel = mongoose.model('users',userSchema)

class User{
    constructor(code,name,password,role){
        this.code = code,
        this.name = name,
        this.password = password,
        this.role = role
    }
    async userRegister(){
        let save = await new userModel(this)
        return save.save()
    }
    async getUsers(){
        let users= await userModel.find()
        if(users.length>0){
            return users
        }else{
            return 'there is no registered user'
        }
        
    }
    async findOneUser(code){
       let user= await userModel.find({code:code})
       if(user.length>0){
           return user
       }else{
           return "this user is not registered"
       }
        
    }

    async deleteUser(code){
        let result =  await userModel.deleteOne({code:code})
        if(!result.deletedCount){
            return "this room is not registered "
        }else{
            return "deleted"
        }
    }

    async updateUser(code){
         let result = await userModel.updateOne({code:code},this)
         if(!result.matchedCount){
            return "this user is not registered"
         }else{
            if(!result.modifiedCount){
                return "can not modify this user"
            }else{
                return this
            }
         }
         
        
    }
    
}

module.exports = User