require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000; // You can change this port number if needed
const axios = require('axios');
const multer = require('multer');
const formData = require('form-data');

const upload = multer();

const FormData = require('form-data');

const IP_Address = process.env.SERVER_IP;

// post request to actual server
app.post('/upload_for_analysis', upload.single('files'), (req, res) => {
   const devServerURL = `http://${IP_Address}/upload_for_analysis`; // Ensure the URL is correct
   const file = req.file;
   const listingUrl = req.body.url;

   let dataToSend = new FormData();
   if (file) {
      // Correctly append the file to FormData
      dataToSend.append('files', file.buffer, file.originalname);
   }
   dataToSend.append('url', listingUrl);

   const formHeaders = dataToSend.getHeaders();

   axios
      .post(devServerURL, dataToSend, { headers: { ...formHeaders } })
      .then((response) => {
         console.log(response.data);
         res.json(response.data);
      })
      .catch((error) => {
         console.error(error);
         res.status(500).json({
            message: 'Error forwarding request to dev server',
         });
      });
});

// mock request using mock data
app.post('/api/data', (req, res) => {
   const filePath = path.join(__dirname, 'mock-data.json');

   // Read the JSON file
   fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
         console.error('Error reading file:', err);
         res.status(500).json({ error: 'Internal server error' });
         return;
      }

      try {
         // Parse the JSON data and send it as a response
         const jsonData = JSON.parse(data);
         res.json(jsonData);
      } catch (error) {
         console.error('Error parsing JSON data:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   });
});

app.get('/', (req, res) => {
   const indexPath = path.join(__dirname, './public/index.html');

   fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
         console.error('Error: ', err);
         res.status(500).send('Internal Server Error');
         return;
      }
      res.send(data);
   });
});

app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
