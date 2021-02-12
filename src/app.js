import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const {
  PORT: port = 3000 
} = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="application/x-www-form-urlencoded">
  <input type="text" name="data">
  <input type="file" name="file">
  <button>Senda</button>
</form>
  `);
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});