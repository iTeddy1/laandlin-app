const Location = require('../models/Location');

const getAllLocations = async (req, res) => {
   try {
      const locations = await Location.find();
      res.status(200).json(locations);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

const getLocationById = async (req, res) => {
   try {
      const location = await Location.findById(req.params.id);
      if (!location) {
         return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json(location);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

const addLocation = async (req, res) => {
   const { url, position, address } = req.body;
   if (!url || !position || !address) {
      return res.status(400).json({ message: 'Please fill in all fields' });
   }
   try {
      const location = await Location.create({
         url,
         position,
         address
      });
      res.status(201).json({message: 'Location added',location});
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const updateLocation = async (req, res) => {
   try {
      const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body);
      if (!updatedLocation) {
         return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json({message: 'Location updated',updatedLocation});
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const deleteLocation = async (req, res) => {
   try {
      const location = await Location.findByIdAndDelete(req.params.id);
      if (!location) {
         return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json({ message: 'Location deleted', location });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

module.exports = {
   getAllLocations,
   getLocationById,
   addLocation,
   updateLocation,
   deleteLocation
};