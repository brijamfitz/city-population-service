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
        res.status(200).json({ [city]: population });
    } else {
        res.status(400).json({ error: 'State/city not found' });
    }
});

app.put('/api/population/state/:state/city/:city', (req, res) => {
    const state = req.params.state.toLowerCase();
    const city = req.params.city.toLowerCase();
    const population = parseInt(req.body.population);

    if (!Number.isNaN(population)) {
        const result = data.setPopulation(state, city, population);
        if (result === 'created') {
            res.status(201).json({ message: 'Data created' });
        } else if (result === 'updated') {
            res.status(200).json({ message: 'Data updated' });
        } else {
            res.status(400).json({ error: 'Data could not be added' });
        }
    } else {
        res.status(400).json({ error: 'Invalid population value' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
