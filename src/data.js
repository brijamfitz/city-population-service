const fs = require('fs');
const csv = require('csv-parser');

let cityPopulationData = {};

function loadCityPopulationData() {
    fs.createReadStream('data/city_populations.csv')
        .pipe(csv())
        .on('data', (row) => {
            const city = row['City'].toLowerCase();
            const state = row['State'].toLowerCase();
            const population = parseInt(row['Population']);

            if (!cityPopulationData[state]) {
                cityPopulationData[state] = {};
            }
            cityPopulationData[state][city] = population;
        })
        .on('end', () => {
            console.log('City population data loaded.');
        });
}

function getPopulation(state, city) {
    if (cityPopulationData[state] && cityPopulationData[state][city]) {
        return cityPopulationData[state][city];
    }
    return null;
}

module.exports = {
    loadCityPopulationData,
    getPopulation,
};
