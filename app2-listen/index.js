const express = require('express');
app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`here on port: ${port}`)
})