const Products = require("../../../models/products");

module.exports.create = async (req, res) => {
  console.log("req.body.name :>> ", req.body.name);
  try {
    const product = new Products({
      name: req.body.name,
      quantity: req.body.quantity,
    });
    const newProduct = await product.save();
    res.status(201).json({
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.display = async (req, res) => {
  try {
    const product = await Products.find();
    res.json({
      data: {
        product: product,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.destroy = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    res.json({ message: "product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.update = async (req, res) => {
  console.log(req.query.number);
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: req.query.number },
    });
    const updatedProduct = await Products.findById(req.params.id);
    res.json({ product: updatedProduct, message: "updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
