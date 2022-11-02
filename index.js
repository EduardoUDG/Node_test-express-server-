import express from'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// App
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use( cors() );
app.use( express.json() );

// Routers
app.get('/', (req, res) => {
    res.json({
        msg: 'Message from / route'
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
