// controllers/serviceController.js
const Service = require("../../models/serviceModel");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, features } = req.body;

    if (!title || !description || !features) {
      return res.status(400).json({ error: "Title, description, and features are required fields." });
    }

    const newService = new Service({ title, description, features });
    await newService.save();

    res.json({ message: "Service created successfully", service: newService });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, features } = req.body;

    if (!title || !description || !features) {
      return res.status(400).json({ error: "Title, description, and features are required fields." });
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, features },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json({ message: "Service updated successfully", service: updatedService });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json({ message: "Service deleted successfully", service: deletedService });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
