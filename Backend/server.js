require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const sequelize = require("./util/dbConnection");
const Recipe = require("./models/recipes");
const User = require("./models/users");
const Ingredient = require("./models/ingredients");

const PORT = process.env.DB_PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 30 * 6) //6 months
app.use(
  cookieSession({
    name: "realsession",
    keys: ["supersecret!!"],
    cookie: {
      secure: true,
      httpOnly: true,
      expires: expiryDate
    }
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type , Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

app.use(authRoutes);
app.use(recipeRoutes);
app.use("/user", userRoutes);

Recipe.hasMany(Ingredient, {
  onDelete: "CASCADE"
});

const User_Recipe = sequelize.define('User_Recipe', {}, { timestamps: false });

User.belongsToMany(Recipe, { through: User_Recipe });
Recipe.belongsToMany(User, { through: User_Recipe });

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
