const componentsControllers = {};
const Component = require("../models/Components");

componentsControllers.getComponents = async (req, res) => {
  const components = await Component.find();
  res.json(components);
};
componentsControllers.createComponents = async (req, res) => {
  const {
    name,
    description,
    category,
    brand,
    price,
    code,
    image,
    stock,
    infoProveedor,
    author,
  } = req.body;

  const newComponent = new Component({
    name,
    description,
    category,
    brand,
    price,
    code,
    image,
    stock,
    infoProveedor,
    author,
  });

  await newComponent.save();
  res.json("Component Created");
  console.log(req.body);
};
componentsControllers.deleteComponents = async (req, res) => {
  await Component.findByIdAndDelete(req.params.id);
  res.json("Component deleted");
};
componentsControllers.updateComponents = async (req, res) => {
  const {
    id,
    name,
    description,
    category,
    brand,
    price,
    image,
    code,
    stock,
    infoProveedor,
    author,
  } = req.body;
  const components = await Component.findByIdAndUpdate(id, {
    name,
    description,
    category,
    brand,
    price,
    image,
    code,
    stock,
    infoProveedor,
    author,
  });

  res.json("Component updated");
};


module.exports = componentsControllers;
