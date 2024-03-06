const getProducts = "SELECT * FROM products;";
const getProductById = "SELECT * FROM products WHERE id = $1;";
const editProduct =
  "UPDATE public.products SET url=$1, price=$2, rating=$3 WHERE id = $4;";
const createProduct =
  "INSERT INTO public.products (id, url, price, rating) VALUES (DEFAULT, $1, $2, $3);";
const deleteProduct = "DELETE FROM public.products WHERE id = $1;";

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  editProduct,
  createProduct,
};
