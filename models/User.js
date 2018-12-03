const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  promoId: String,
  name: String,
  email: String,
  routes: [{ type: Schema.Types.ObjectId, ref: 'routes' }]
})

mongoose.model('users', userSchema)
