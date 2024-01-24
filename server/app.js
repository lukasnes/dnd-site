import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import session from 'express-session'
import {
    login,
    logout,
    checkStatus,
    register
} from './controllers/authController.js'

const app = express()
const PORT = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())
app.use(session({ secret: 'super-secret', saveUninitialized: true, resave: false }));

ViteExpress.config( { printViteDevServerHost: true } )

//AUTH ENDPOINTS
app.get('/api/auth/status', checkStatus)
app.post('/api/auth/login', login)
app.post('/api/auth/logout', logout)
app.post('/api/auth/register', register)


ViteExpress.listen(app,PORT,() => console.log(`Server running on http://localhost:${PORT}`))