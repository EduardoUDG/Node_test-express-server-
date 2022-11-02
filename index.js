const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
app.use( cors() );

app.get('/', (req, res) => {
    res.json({
        msg: 'Message from / route'
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
