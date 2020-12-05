const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });

  app.get("/api/workouts/:id", (req, res) => {
    db.Workout.findOne({ _id: req.params.id }).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts/:id", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
};


