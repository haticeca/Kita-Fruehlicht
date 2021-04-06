module.exports = app => {
    const projekte = require("../controller/projekte.controller.js");

    // Create a new Member
    app.post("/projekte", projekte.create);

    // GET all projekte
    app.get("/projekte", projekte.findAll);

    // GET one single Member with projektId
    app.get("/projekte/:projektId", projekte.findOne);

    // Update one Member with projektId
    app.put("/projekte/:projektId", projekte.update);

    // Delete the Member with projektId
    app.delete("/projekte/:projektId", projekte.delete);

    // Delete all projekte
    app.delete("/projekte", projekte.deleteAll);
};
