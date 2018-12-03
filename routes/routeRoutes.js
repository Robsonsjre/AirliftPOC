const mongoose = require('mongoose')
const Routes = mongoose.model('routes');

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
    console.log('caiu "/api/routes"')
    console.log('req.body', req.body)
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

}
