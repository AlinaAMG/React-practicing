const fs = require('fs').promises;
const path = require('path');

// GeT CITIES
async function getCities(req, res) {
  try {
    const filePath = path.join(__dirname,"..", 'data', 'cities.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const cities = JSON.parse(data);
    res.json(cities);
  } catch (err) {
    res.status(500).json({
      message: 'Fout bij het laden van de steden',
      error: err.message,
    });
  }
}
// Get cities by Id

async function getCityById(req, res) {
  try {
    const cityId = Number(req.params.id);
    const filePath = path.join(__dirname, "..", 'data', 'cities.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const cities = JSON.parse(data);

    const city = cities.find((c) => c.id === cityId);
    if (!city) return res.status(404).json({ error: 'City not found' });

    res.json(city);
  } catch (err) {
    res.status(500).json({
      message: 'Fout bij het ophalen van het stad',
      error: err.message,
    });
  }
}

// POST a new city
async function createCity(req, res) {
  try {
    const { cityName, country, emoji, date, position, notes } = req.body;

    if (!cityName || !country ||!notes) {
      return res
        .status(400)
        .json({ error: 'City name, country and notes are required' });
    }

    const filePath = path.join(__dirname,"..", 'data', 'cities.json');

    let cities = [];
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) cities = parsed;
    } catch (err) {
      cities = [];
    }

    const newCity = {
      id: cities.length ? cities[cities.length - 1].id + 1 : 1,
      cityName,
      country,
      emoji: emoji || '🏙️',
      date: date || new Date().toISOString(),
      position: {
        lat: position?.lat ?? null,
        lng: position?.lng ?? null,
      },
      notes: notes || '',
    };

    cities.push(newCity);
    await fs.writeFile(filePath, JSON.stringify(cities, null, 2));

    res.status(201).json(newCity);
  } catch (err) {
    res.status(500).json({
      message: 'Fout bij het toevoegen van de stad',
      error: err.message,
    });
  }
}

// DELETE a city
async function deleteCity(req, res) {
  try {
    const cityId = Number(req.params.id);
    const filePath = path.join(__dirname,"..", 'data', 'cities.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const cities = JSON.parse(data);

    const updatedCities = cities.filter((city) => city.id !== cityId);

    await fs.writeFile(filePath, JSON.stringify(updatedCities, null, 2));
    res.status(200).json({ message: 'City deleted successfully' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting city', error: err.message });
  }
}

// Page not found(404)
function pageNotFound(req, res) {
  res.status(404).json({
    error: 'Page not found',
    message: `De route ${req.originalUrl} bestaat niet of de stad is niet gevonden`,
  });
}

module.exports = {
  getCities,
  getCityById,
  createCity,
  deleteCity,
  pageNotFound,
};
