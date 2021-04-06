const Projekt = require("../model/Projekts.model.js");

// Create and Save a new Projekt
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Projekt
    const Projekt = new Projekt({
        titel: req.body.titel,
        beschreibung: req.body.beschreibung,
        datum: new Date(req.body.datum),
        ort: req.body.ort,
        imgName: req.body.imgName,
        imgUrl: req.body.imgName
    });

    // Save Customer in the database
    Projekt.create(Projekt, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Projekt."
            });
        else res.send(data);
    });
};

// Retrieve all Projekts from the database.
exports.findAll = (req, res) => {
    Projekt.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Projekts."
            });
        else res.send(data);
    });
};

// Find a single Projekt with a ProjektId
exports.findOne = (req, res) => {
    Projekt.findById(req.params.projektId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Projekt with id ${req.params.projektId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Projekt with id " + req.params.projektId
                });
            }
        } else res.send(data);
    });
};

// Update a Projekt identified by the ProjektId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Projekt.updateById(
        req.params.projektId,
        new Projekt(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Projekt with id ${req.params.projektId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Projekt with id " + req.params.projektId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Projekt with the specified ProjektId in the request
exports.delete = (req, res) => {
    Projekt.remove(req.params.projektId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Projekt with id ${req.params.projektId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Projekt with id " + req.params.projektId
                });
            }
        } else res.send({ message: `Projekt was deleted successfully!` });
    });
};

// Delete all Projekts from the database.
exports.deleteAll = (req, res) => {
    Projekt.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Projekts."
            });
        else res.send({ message: `All Projekts were deleted successfully!` });
    });
};
