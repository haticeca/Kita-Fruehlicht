const sql = require("./db.js");

// constructor
const Member = function(member) {
    this.firstname = member.firstname;
    this.lastname = member.lastname;
    this.birthday = member.birthday;
    this.geschlecht = member.geschlecht;
    this.wunschtermin = member.wunschtermin;
    this.geschwisterkind = member.geschwisterkind;
    this.parentFirstName = member.parentFirstName;
    this.parentLastName = member.parentLastName;
    this.adres = member.adres;
    this.houseNumber = member.houseNumber;
    this.plz = member.plz;
    this.ort = member.ort;
    this.email = member.email;
    this.telefon = member.telefon;
};

Member.create = (newMember, result) => {
    sql.query("INSERT INTO members SET ?", newMember, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created member: ", { id: res.insertId, ...newMember });
        result(null, { id: res.insertId, ...newMember });
    });
};

Member.findById = (memberId, result) => {
    sql.query(`SELECT * FROM members WHERE id = ${memberId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found member: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Member with the id
        result({ kind: "not_found" }, null);
    });
};

Member.getAll = result => {
    sql.query("SELECT * FROM members", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("members: ", res);
        result(null, res);
    });
};

Member.updateById = (id, member, result) => {
    sql.query(
        "UPDATE members SET firstname = ?, lastname = ?, birthday = ?, geschlecht = ?, wunschtermin = ?, geschwisterkind = ?, parentFirstName = ?, parentLastName = ?, adres = ?, houseNumber = ?, plz = ?, ort = ?, email = ?, telefon = ? WHERE id = ?",
        [member.firstname, member.lastname, member.birthday, member.geschlecht, member.wunschtermin, member.geschwisterkind, member.parentFirstName, member.parentLastName, member.adres, member.houseNumber, member.ort, member.plz, member.email, member.telefon, id],
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

            console.log("updated member: ", { id: id, ...member });
            result(null, { id: id, ...member });
        }
    );
};

Member.remove = (id, result) => {
    sql.query("DELETE FROM members WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Member with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted member with id: ", id);
        result(null, res);
    });
};

Member.removeAll = result => {
    sql.query("DELETE FROM members", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} members`);
        result(null, res);
    });
};

module.exports = Member;
