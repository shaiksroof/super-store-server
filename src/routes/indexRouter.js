const index_controller = require('../controllers/indexController');
const indexRouter = require('express').Router();
indexRouter.route('/')
    .get(index_controller.index_list);

module.exports = indexRouter;
