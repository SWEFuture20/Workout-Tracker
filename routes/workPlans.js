var db = require("../models")

module.exports = function(app) {

    app.get("/api/training", (req, res) => {
        db.Workplan.find({}).then(dbWorkout => {
            res.json(dbWorkplan);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    app.get("/api/training/results", ({}, res) => {
        db.Workplan.find({}).then((dbWorkplan) => {
          res.json(dbWorkplan);
        }).catch(err => {
          res.status(400).json(err);
        });
      });
      app.post("/api/training/", (req, res) => {
        db.Workplan.create(req.body).then((dbWorkplan) => {
          res.json(dbWorkplan);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
      app.put("/api/training/:id", (req, res) => {
        db.Workplan.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkplan) => {
          res.json(dbWorkplan);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};