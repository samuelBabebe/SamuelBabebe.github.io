let mongoose = require('mongoose')
let classRoomSchema = mongoose.Schema({
    code:{type:Number, required:true, unique:true},
    slots:[
        {
            number:{type:Number,required:true},
            status:{type:String, required:true},
            used_by:{type:Number}
        }
    ]
})

let classRoomModel = mongoose.model('classRoom',classRoomSchema)

class classRoom{
    constructor(code,slots){
        this.code = code
        this.slots = slots

    }
    async roomRegister(){
        
        let save = await new classRoomModel(this)
        return save.save()
    }
    async getRooms(){
        let rooms =  await classRoomModel.find()
        if(rooms.length>0){
            return rooms
        }else{
            return 'there is no registered room'
        }
        
    }
    async findOneRoom(code){
       let room =  await classRoomModel.find({code:code})
       if(room.length>0){
           return room
       }else{
           return "this room is not registered"
        }
        
    }

    async deleteRoom(code){
        let result =  await classRoomModel.deleteOne({code:code})
        if(!result.deletedCount){
            return "this room is not registered "
        }else{
            return "deleted"
        }
    }

    async updateRoom(code){
         let result = await classRoomModel.updateOne({code:code},this)
         if(!result.matchedCount){
            return "this room is not registered"
         }else{
            if(!result.modifiedCount){
                return "can not modify this room"
            }else{
                return this
            }
         }
         
        
    }

    async findSlotsAndStataus(slotNo,status){
        return  await classRoomModel.find({slots:{$elemMatch:{number:slotNo,status:status}}})
 
        
    }

    async slotReservation(roomCode,slotCode,usercode){
        
        let myRoom = await this.findOneRoom(roomCode)
        
        if(myRoom!='room is not registered'){
            let roomSlots = myRoom[0].slots
            let slotIndex
            let mySlot = roomSlots.find((slot,index)=>{slotIndex=index;return slot.number===slotCode})
            
           
            
            if(mySlot){
                if(mySlot.status==="available"){
                    let updatedRoom = await classRoomModel.updateOne({code:roomCode,slots:{$elemMatch:{number:{$eq:slotCode}}}},{$set:{"slots.$.status":"busy","slots.$.used_by":usercode}})
                    if(updatedRoom.matchedCount===0){
                        return " mongserver eror"
                    }else{
                        if(updatedRoom.modifiedCount===0){
                            return ' can not reserve this slot comminicate with admins'
                        }else{
                            return "slot reserved"
                        }
                    }

                   
                }else{
                    return 'the slot is busy'
                }
                
            }else{
                return 'this slot is not registerd'
            }
        }else{
            return myRoom
        }
        
    }

    async slotReleased(roomCode,slotCode,userCode){
        let myRoom = await this.findOneRoom(roomCode)

        if(myRoom!="this room is not registered"){
            let roomSlot = myRoom[0].slots
            let roomIndex
            let mySlot = await roomSlot.find((slot,index)=>{
                roomIndex=index;
                return slot.number===slotCode
            })
            if(mySlot.status==="busy" && mySlot.used_by===userCode ){
                let updatedRoom = await classRoomModel.updateOne({code:roomCode,slots:{$elemMatch:{number:slotCode}}},{$set:{"slots.$.status":"available","slots.$.used_by":""}})
                if(updatedRoom.matchedCount===0){
                    return " mongserver eror"
                }else{
                    if(updatedRoom.modifiedCount===0){
                        return ' can not relese this slot comminicate with admins'
                    }else{
                        return "slot relesed"// await this.findOne(roomCode)
                    }
                }
            }else{
                return 'you had not rerserved this slot'
            }
        }else{
            return myRoom
        }
    }

}



module.exports = classRoom