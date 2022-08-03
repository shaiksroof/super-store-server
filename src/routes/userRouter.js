const user_controller = require('../controllers/userController');
const userRouter = require('express').Router();
userRouter.route('/')
    .post(user_controller.add_user)
    .get(user_controller.list_user);
userRouter.route('/update')
    .post(user_controller.update_user);
userRouter.route('/delete')
    .post(user_controller.delete_user);

module.exports = userRouter;
