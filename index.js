const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://worldwiseproject-app.netlify.app' }));

app.get('/cities', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'cities.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const cities = JSON.parse(data);
    res.json(cities);
  } catch (err) {
    res.status(500).json({
      message: 'Fout bij het laden van de steden',
      error: err.message,
    });
  }
});
app.get('/cities/:id', async (req, res) => {
  try {
    const cityId = Number(req.params.id);
    const filePath = path.join(__dirname, 'data', 'cities.json');
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
});
// POST a new city
app.post('/cities', async (req, res) => {
  try {
    const { cityName, country, emoji, date, position, notes } = req.body;

    if (!cityName || !country) {
      return res
        .status(400)
        .json({ error: 'City name and country are required' });
    }

    const filePath = path.join(__dirname, 'data', 'cities.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const cities = JSON.parse(data);

    const newCity = {
      id: cities.length ? cities[cities.length - 1].id + 1 : 1,
      cityName,
      country,
      emoji: emoji || '🏙️',
      date: date || '',
      position: position || { lat: null, lng: null },
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
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running op : ${PORT}`)
})