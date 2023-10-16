const express = require('express');
const data = require('./data');

const app = express();
const port = 5555;

// Load city population data from CSV file and cache it
data.loadCityPopulationData();

app.use(express.json());

app.get('/api/population/state/:state/city/:city', (req, res) => {
    const state = req.params.state.toLowerCase();
    const city = req.params.city.toLowerCase();

    const population = data.getPopulation(state, city);

    if (population !== null) {
        res.status(200).json({ population });
    } else {
        res.status(400).json({ error: 'State/city not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
