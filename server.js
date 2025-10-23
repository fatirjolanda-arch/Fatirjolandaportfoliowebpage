const express = require('express');
const path = require('path'); // Modul bawaan Node.js
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// arahkan express ke folder "front-end"
app.use(express.static(path.join(__dirname, 'Front-end')));


app.post('/submit', (req, res) => {
  const { name, massage } = req.body;
  console.log('Data diterima di server:', req.body);
  // Kirim respons ke browser
  res.json({
    message: 'Sending massage was successfull!',
    data: req.body
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front-end', 'index1.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});


