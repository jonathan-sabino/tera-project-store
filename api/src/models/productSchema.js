import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		categories: {
			type: Array,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("product", productSchema);
