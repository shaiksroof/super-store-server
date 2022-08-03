const indexController = require('../controllers/indexController');
const indexRouter = require('express').Router(); //eslint-disable-line
indexRouter.route('/')
    .get(indexController.index_list);

module.exports = indexRouter;
