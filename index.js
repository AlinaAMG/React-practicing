require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();


app.use(cors({origin:"https://movieapp-usepopcorn.netlify.app/"})); // Laat requests toe van je frontend

// Route: zoek films op titel
app.get('/api/movies', async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'No title provided' });
  }

  try {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: title,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching movie data' });
  }
});

console.log('OMDB_API_KEY is:', process.env.OMDB_API_KEY);
module.exports = app;

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
