import express from 'express';
import dotenv from 'dotenv';
import { query } from './db.js';

dotenv.config();

const {
  PORT: port = 3000 
} = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="application/x-www-form-urlencoded">
  <input type="text" name="Nafn">
  <input type="text" name="Kennitala">
  <input type="text" name="Athugasemd">
  <button>Skrifa undir</button>
</form>

  `);
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

app.post('/', (req, res) => {
  res.send('HAlli er me[ tybi')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});