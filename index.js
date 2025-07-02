const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 9000;


app.use(cors({ origin: "https://worldwiseproject-app.netlify.app" })); 

app.get("/cities", async (req, res) => {
    try {
          const filePath = path.join(__dirname, "data", "cities.json");
        const data = await fs.readFile(filePath, "utf-8")
        const cities = JSON.parse(data);
        res.json(cities);
    } catch (err) {
        res.status(500).json({message:"Fout bij het laden van steden", error:err.message})
    }
})
app.get("/cities/:id", async (req, res) => {
  try {
    const cityId = Number(req.params.id);
    const filePath = path.join(__dirname, "data", "cities.json");
    const data = await fs.readFile(filePath, "utf-8");
    const cities = JSON.parse(data);

    const city = cities.find((c) => c.id === cityId);
    if (!city) return res.status(404).json({ error: "City not found" });

    res.json(city);
  } catch (err) {
    res.status(500).json({ message: "Fout bij het ophalen van stad", error: err.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running op : ${PORT}`)
})