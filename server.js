const express = require('express')
const app = express()
const path = require('path')
//I need to be able to receive the file and send it over to some form of a backend,
//and I need to be able to access the info associated with the .ics file. 
app.use(express.static(path.join(__dirname, 'css')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_index.html'))
})

app.post("/", (req, res) => {
    console.log(req)
    res.send("POST Request successful")
})

app.listen(3000, () => console.log('Listening on port 3000.'))