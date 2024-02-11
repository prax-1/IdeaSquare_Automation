// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/componentsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

// Component schema
const componentSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});
const Component = mongoose.model('Component', componentSchema);

// API routes
app.get('/api/components', async (req, res) => {
    try {
        const components = await Component.find();
        res.json(components);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/components/add', async (req, res) => {
    const component = new Component({
        name: req.body.name,
        quantity: req.body.quantity
    });
    try {
        const newComponent = await component.save();
        res.status(201).json(newComponent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/api/components/:id/subtract', async (req, res) => {
    try {
        const component = await Component.findById(req.params.id);
        if (component.quantity > req.body.quantity) {
            component.quantity -= req.body.quantity;
        } else {
            component.quantity = 0;
        }
        const updatedComponent = await component.save();
        res.json(updatedComponent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/inventory/status', async (req, res) => {
    try {
        const components = await Component.find();
        let totalQuantity = 0;
        components.forEach(component => {
            totalQuantity += component.quantity;
        });
        res.json({ totalQuantity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const fetchInventoryStatus = async () => {
    try {
      const response = await axios.get('/api/inventory/status');
      console.log('Inventory Status:', response.data);
      setInventoryStatus(response.data.totalQuantity);
    } catch (error) {
      console.error('Error fetching inventory status:', error);
    }
  };
  
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
