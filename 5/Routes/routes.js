const Router = require("express").Router();
const services = require("../Services/service");

Router.get("/registerPage", services.registerPage); //* Register Page Route
Router.get("/loginPage", services.loginPage);

module.exports = Router;