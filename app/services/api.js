const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

const API_ENDPOINT = process.env.API_ENDPOINT;

app.get('/api/SportProgram/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});