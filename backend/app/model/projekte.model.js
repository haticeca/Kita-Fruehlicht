const sql = require("./db.js");

// constructor
const Projekt = function(projekt) {
    this.titel = projekt.titel;
    this.beschreibung = projekt.beschreibung;
    this.datum = projekt.datum;
    this.ort = projekt.ort;
    this.imgName = projekt.imgName;
    this.imgUrl = projekt.imgUrl
};

Projekt.create = (newProjekt, result) => {
    sql.query("INSERT INTO projekte SET ?", newProjekt, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created projekt: ", { id: res.insertId, ...newProjekt });
        result(null, { id: res.insertId, ...newProjekt });
    });
};

Projekt.findById = (projektId, result) => {
    sql.query(`SELECT * FROM projekte WHERE id = ${projektId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found projekt: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Projekt with the id
        result({ kind: "not_found" }, null);
    });
};

Projekt.getAll = result => {
    sql.query("SELECT * FROM projekte", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("projekte: ", res);
        result(null, res);
    });
};

Projekt.updateById = (id, projekt, result) => {
    sql.query(
        "UPDATE projekte SET titel = ?, beschreibung = ?, datum = ?, ort = ?, imgName = ?, imgUrl = ? WHERE id = ?",
        [projekt.titel, projekt.beschreibung, projekt.datum, projekt.ort, projekt.imgName, projekt.imgUrl, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated projekt: ", { id: id, ...projekt });
            result(null, { id: id, ...projekt });
        }
    );
};

Projekt.remove = (id, result) => {
    sql.query("DELETE FROM projekte WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Projekt with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted projekt with id: ", id);
        result(null, res);
    });
};

Projekt.removeAll = result => {
    sql.query("DELETE FROM projekte", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} projekt`);
        result(null, res);
    });
};

module.exports = Projekt;
