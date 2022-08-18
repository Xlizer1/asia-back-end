import pkg from "mongoose";

const { Schema, model } = pkg;

const ProductSchema = new Schema({
  name: String,
  desc: String,    
  image: String
});

const ProductModel = new model("products", ProductSchema);

export default ProductModel;