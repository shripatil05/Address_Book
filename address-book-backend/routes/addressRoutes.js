const express = require('express');
const router = express.Router();
const Address = require('../models/address');

// GET all addresses
router.get('/addresses', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching addresses', error });
  }
});

// POST a new address
router.post('/addresses', async (req, res) => {
  const newAddress = new Address(req.body);
  try {
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(400).json({ message: 'Error saving address', error });
  }
});

// GET a specific address by ID
router.get('/addresses/:id', async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching address', error });
  }
});

// PUT to update an address by ID
router.put('/addresses/:id', async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json(updatedAddress);
  } catch (error) {
    res.status(400).json({ message: 'Error updating address', error });
  }
});

// DELETE an address by ID
router.delete('/addresses/:id', async (req, res) => {
  try {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);
    if (!deletedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting address', error });
  }
});

module.exports = router;
