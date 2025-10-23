const express = require('express');
const cors = require('cors');
const citiesRoutes = require('./routes/cities');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      'https://worldwiseproject-app.netlify.app',
      'http://localhost:5173',
    ],
  })
);
app.use('/', citiesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running op : ${PORT}`);
});
