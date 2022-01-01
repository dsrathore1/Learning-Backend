const Router = require('express').Router();
const services = require("../services/render");
const controller = require("../Controller/controller");

Router.get('/', services.homeRoutes);

Router.get('/add_user', services.addRoutes);
Router.get('/update_user', services.updateRoutes);

// API 
Router.get('/api/users', controller.find);
Router.post('/api/users', controller.create);
Router.put('/api/users/:id', controller.update);
Router.delete('/api/users/:id', controller.delete);

module.exports = Router;