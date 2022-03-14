let express = require('express')
let router = express.Router()
let userController = require('../controller/user')

router.post('/add',userController.registerUser)
router.post('/login',userController.login)

//the rest need authorization
router.use(userController.userAutorization)

router.get('/',userController.adminAutorization,userController.getUsers)
router.get('/:code',userController.adminAutorization,userController.getEachUser)
router.delete('/delete/:code',userController.adminAutorization,userController.deleteEachUser)
router.put('/update/:code',userController.updateEachUser)

//

//router.get('/:number/:status',userController.get)


module.exports = router