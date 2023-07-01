const express = require('express');
const Calculator = require('./calculator');

const app = express();
const calculator = new Calculator();

app.use(express.json());

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.add(a, b) });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.subtract(a, b) });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: calculator.multiply(a, b) });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  try {
    res.json({ result: calculator.divide(a, b) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
