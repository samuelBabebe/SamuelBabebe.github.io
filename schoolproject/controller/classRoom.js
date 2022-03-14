let classRoomModel = require('../models/classRoom')
exports.registerRoom = async (req,res)=>{
   const {code,slots} = req.body
   if(code&&slots){
       try{
        let room = new classRoomModel(code,slots)
        let result = await room.roomRegister()
           
            res.status(201).send(result)
           
       }catch(err){
            res.status(405).json({eror:`duplicated ${code}`})
       }
       
        
   }else{
       res.status(400).send('please insert code and room slot') 
   }
  
}

exports.getAllRooms = async (req,res)=>{
    let rooms = new classRoomModel()

    let allRooms = await rooms.getRooms()
    if(allRooms){
        res.send(allRooms)
    }else{
        res.send('there is no registered room')
    }
    
}
exports.getEachRoom = async (req,res)=>{
    let roomCode = req.params.code
    if(roomCode){
        let room = new classRoomModel()
        let thisRoom = await room.findOneRoom(roomCode)
        if(thisRoom){
            res.send(thisRoom)
        }else{
            res.send('this room is not registered') 
        }
    }
    
}

exports.deleteEachRoom = async (req,res)=>{
    let roomcode = req.params.code
    if(roomcode){
        let room = new classRoomModel()
        let result = await room.deleteRoom(roomcode)
        res.send(result)
    }else{
        res.send('please insert the room code you want to delete')
    }
}

exports.updateEachRoom= async (req,res)=>{
    let roomCode = req.params.code
    const {code,slots} = req.body
    if(roomCode){
        let room = new classRoomModel(code,slots)
        let result = await room.updateRoom(roomCode)
        res.send(result)
    }else{
        es.send('please insert the room code you want to update')
    }
}

exports.getSlotsAvailavlity= async(req,res)=>{
    let slotNumber = Number(req.params.number)
    let status = req.params.status
    
    if(slotNumber&&status){
        let room = new classRoomModel()
        let results = await room.findSlotsAndStataus(slotNumber,status)
     
        res.send(results)
    }else{
        res.send('please insert the slot number and avilablity')
    }
}

exports.slotReserve = async (req,res)=>{
    let roomCode = parseInt(req.params.roomcode)
    let slotCode = parseInt(req.query.slotcode)
    let usercode = req.user.code
    if(roomCode&&slotCode){
        let room = new classRoomModel()
        let result = await room.slotReservation(roomCode,slotCode,usercode)
        res.send(result)
    }else{
        res.send('please provide the room code and slote code to reserve')
    }
}

exports.slotCompleted = async (req,res)=>{
    let roomCode = parseInt(req.params.roomcode)
    let slotCode = parseInt(req.params.slotcode)
    let complition = req.params.complition
    let usercode = req.user.code
   
    if(roomCode&&slotCode&&complition){
        let room = new classRoomModel()
        let result = await room.slotReleased(roomCode,slotCode,usercode)
        res.send(result)
    }else{
        res.send('please provide the room code, slot code and complition status')
    }
}