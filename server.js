const express = require('express')

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extend: true}))


// routers
const router = require('./routes/articleRouter.js')
app.use('/api/articles',router)


const routerCategorie = require('./routes/categorieRouter.js')
app.use('/api/categories',routerCategorie)



//testing api 
app.get('/',(req,res) => {
    res.json({message: 'hello from api'})
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port' + PORT)
})