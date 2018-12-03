const mongoose = require("mongoose");
const Users = mongoose.model("users");

module.exports = app => {
  app.get("/api/users/", async (req, res) => {
    try {
      const users = await Users.find();
      res.send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post("/api/users", async (req, res) => {
    const { promoId, name, email, routes } = req.body;
    const user = new Users({
      promoId,
      name,
      email,
      routes
    });

    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
