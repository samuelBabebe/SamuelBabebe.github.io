let express = require('express')
let router = express.Router()
let classRoomController = require('../controller/classRoom')
let userController = require('../controller/user')

router.use(userController.Autorization)

router.get('/',classRoomController.getAllRooms)

router.get('/:code',classRoomController.getEachRoom)

router.get('/available/:roomcode',userController.userAutorization,classRoomController.slotReserve)
router.get('/:number/:status',classRoomController.getSlotsAvailavlity)

router.get('/:roomcode/:slotcode/:complition',classRoomController.slotCompleted)






router.post('/add',userController.adminAutorization,classRoomController.registerRoom)
router.delete('/delete/:code',userController.adminAutorization,classRoomController.deleteEachRoom)
router.put('/update/:code',userController.adminAutorization,classRoomController.updateEachRoom)





module.exports = router