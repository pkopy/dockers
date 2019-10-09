const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hi 6666 there sssssssssssssssssssssssssss')
})


app.listen(8080, () => {
    console.log('List on port 80808')
})