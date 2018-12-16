const mongoose = require('mongoose')
const { Schema } = mongoose

const routesSchema = new Schema({
  title: { type: String, default: 'RouteName' },
  departure: { type: String, default: 'RouteDeparture' },
  departure_time: { type: String, default: '16:00' },
  arrival: { type: String, default: 'RouteArrival' },
  arrival_time: { type: String, default: '17:00' },
  routeImgUrl: { type: String, default: 'http://defaultimgurl.com' },
  pickupImgUrl: { type: String, default: 'http://defaultimgurl.com' },
})

mongoose.model('routes', routesSchema)
