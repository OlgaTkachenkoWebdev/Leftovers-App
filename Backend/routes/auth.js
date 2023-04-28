const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/users");

router.get("/", (req, res) => {});


router.get("/login", (req, res) => {});


router.post("/signup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.create({
    name,
    email,
    password: hashedPassword,
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500);
    });
});


router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.dataValues.password)) {
          req.session.userID = user.dataValues.id;
          res.json({
            userid: user.dataValues.id,
            username: user.dataValues.name,
          });
        } else {
          res.status(401).json("Wrong password");
        }
      } else {
        res.status(401).json("Wrong email or user does not exist");
      }
    })
    .catch((err) => {
      res.status(500);
    });
});

router.post("/logout", (req, res) => {
  req.session = null;
  res.json("user logout");
});

module.exports = router;
