
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})
app.get('/blog', (req, res) => {
    res.send('Hello blog!')
  })

//   app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch into-to-js from the db
//     res.send('Hello to intro to js!')
//   })

//   app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch into-to-python from the db
//     res.send('Hello to intro to python!')
//   })
app.get('/blog/:slug', (req, res) => {
    //logic to fetch slug from the db
    res.send(`hello ${req.params.slug}`)
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//?ke bad vali query hoti hain