const axios = require("axios")
exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:4000/api/users").then(function (response) {
        // console.log(response);
        res.render("index", { users: response.data });
    }).catch(err => {
        res.send(err);
    })
}


exports.addRoutes = (req, res) => {
    res.render("add_user")
}
exports.updateRoutes = (req, res) => {
    res.render("update_user");
}