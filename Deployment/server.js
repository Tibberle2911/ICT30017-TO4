const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, JS, CSS)

// File paths for staff and interpreter data
const staffPath = path.join(__dirname, 'public', 'data', 'staff.json');
const interpreterPath = path.join(__dirname, 'public', 'data', 'interpreter.json');

// Ensure the files exist, or create them with empty arrays
function ensureJsonFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
  }
}

ensureJsonFileExists(staffPath);
ensureJsonFileExists(interpreterPath);

// POST: Add new staff member
app.post('/api/add-staff', (req, res) => {
  fs.readFile(staffPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading staff file');

    let staffList;
    try {
      staffList = JSON.parse(data);
    } catch (e) {
      staffList = [];
    }

    staffList.push(req.body); // Add the new staff to the list

    fs.writeFile(staffPath, JSON.stringify(staffList, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing staff file');
      res.status(200).json({ message: 'Staff added successfully' });
    });
  });
});

// POST: Add new interpreter
app.post('/api/add-interpreter', (req, res) => {
  fs.readFile(interpreterPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading interpreter file');

    let interpList;
    try {
      interpList = JSON.parse(data);
    } catch (e) {
      interpList = [];
    }

    interpList.push(req.body); // Add the new interpreter to the list

    fs.writeFile(interpreterPath, JSON.stringify(interpList, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing interpreter file');
      res.status(200).json({ message: 'Interpreter added successfully' });
    });
  });
});

// Catch-all route to serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
