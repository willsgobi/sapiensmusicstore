import productList from "./productList"

export default function productsByCategory(req, res) {
  var { id } = req.query;

  var product = productList.find(c => c.id == id);

  if(product != null) {
    res.status(200).json(product)
  } else {
    res.status(404).json({"error_message": "Product Not Found"});
  }
}
