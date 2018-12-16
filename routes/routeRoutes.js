const mongoose = require('mongoose')
const async = require('async')

const Routes = mongoose.model('routes');
const Users = mongoose.model('users');

module.exports = app => {
  app.get('/api/routes/', async (req, res) => {
    try {
      const routes = await Routes.find()
      res.send(routes)
    } catch(err) {
      res.status(400).send(err)
    }
  })

  app.post("/api/routes", async (req, res) => {
    const { arrival, departure, name, routeImgUrl, pickupImgUrl } = req.body;
    const route = new Routes({
      arrival,
      departure,
      name,
      routeImgUrl,
      pickupImgUrl
    });

    try {
      await route.save();
      res.send(route);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/routes/findUsersRoutes", async (req, res) => {
    const { promoCode } = req.body;

    try {
      const user = await Users.findOne({promoId: promoCode})
      console.log('user', user)
      if (user) {
        console.log('user.routes', user.routes)
          let routes = await Routes.find({_id: user.routes})
          console.log('routes', routes)
        res.send(routes);
      } else {
        console.log('não achou user')
        res.send([])
      }
    } catch (err) {
      res.status(422).send(err);
    }
  });

}
