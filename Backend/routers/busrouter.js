const router = require("express").Router();

const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3"
  },
  useNullAsDefault: true
};

const db = knex(knexConfig);

router.get("/", (req, res) => {
  db("busLoads")
    .then(busLoads => {
      res.status(200).json(busLoads);
    })
    .catch(err => {

      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("busLoads")
    .where({ id: req.params.id })
    .then(busLoads => {
      res.status(200).json(busLoads);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id/students", (req, res) => {
  db("busLoads")
    .where({ id: req.params.id })
    .then(busLoads => {
      res.status(200).json(busLoads);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    console.log("Req", req.body)
  db("busLoads")
    .insert(req.body)
    .then(res => {
     res.status(200).json(busLoads);
        
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  db("busLoads")
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "Update Complete" });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Update failed" });
    });
});

router.delete("/:id", (req, res) => {
  db("busLoads")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "Delete Complete" });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Delete failed" });
    });
});

module.exports = router;