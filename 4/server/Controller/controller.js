let userDB = require("../Model/model");

// create and save new user
exports.create = (req, res) => {
    // Validate
    if (!req.body) {
        res.status(404).send({ message: "Content cannot be empty" });
        return;
    }
    // New user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    // save user in the database
    user.save().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occured while create user" })
        });
}


//retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        userDB.findById(id).then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found user with id" + id });
            } else {
                res.send(data);
            }
        }).catch(err => {
            res.status(500).send({ message: "Error retrieveing user with id" + id });
        })

    } else {
        userDB.find().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error Occured" });
        });
    }

}

// Update a new identified user by user id
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(404).send({ message: "Data to update can not be empty" });
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot Update user with ${id}.Maybe user not be found!!!` });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error Update user information" });
    });
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id
    userDB.findByIdAndDelete(id).then(data => {
        if (!data) {
            return res.status(404).send({ message: "No data to delete" });
        } else {
            res.send({ message: "Your user is deleted successfully!!" });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message || "error delete data information" });
    });
}