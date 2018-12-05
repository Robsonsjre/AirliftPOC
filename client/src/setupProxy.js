const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/routes/', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/routes/findUsersRoutes', { target: 'http://localhost:5000' }))
}
