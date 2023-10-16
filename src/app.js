const express = require('express');
const data = require('./data');

const app = express();
const port = 5555;

// Load city population data from CSV file and cache it
data.loadCityPopulationData();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
