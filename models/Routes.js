const mongoose = require('mongoose')
const { Schema } = mongoose

const routesSchema = new Schema({
  title: { type: String, default: 'RouteName' },
  departure: { type: String, default: 'RouteDeparture' },
  arrival: { type: String, default: 'RouteArrival' },
  routeImgUrl: { type: String, default: 'http://defaultimgurl.com' },
  pickupImgUrl: { type: String, default: 'http://defaultimgurl.com' },
})

mongoose.model('routes', routesSchema)
