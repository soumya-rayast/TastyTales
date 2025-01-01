const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();

dotenv.config()

connectDB();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('TastyTales server is running ')
})
// routes 
const ItemRoutes = require('./src/routes/itemRoutes.js');
const CategoryRoutes = require('./src/routes/categoryRoute.js')

app.use('/api', ItemRoutes);
app.use('/api/', CategoryRoutes);


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})