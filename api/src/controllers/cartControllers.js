import cartSchema from "../models/cartSchema.js";

// CREATE
const createCart = async (req, res) => {
	try {
		const newCart = new cartSchema(req.body);

		const savedCart = await newCart.save();
		res.status(200).send({
			message: "Carrinho criado com sucesso",
			statusCode: 200,
			data: savedCart,
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// READ
const getAll = async (req, res) => {
	try {
		const carts = await cartSchema.find().exec();
		res.status(200).send(carts);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const getCartById = async (req, res) => {
	try {
		const cart = await cartSchema.findOne({ userId: req.params.userId });
		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
const updateCart = async (req, res) => {
	try {
		const cartId = req.params.id;

		const updatedCart = await cartSchema.findByIdAndUpdate(
			cartId,
			updateData,
			{
				new: true,
			}
		);

		if (!updatedCart) {
			return res.status(404).send({ message: "Carrinho não encontrado" });
		}

		res.status(200).send({
			message: "Carrinho atualizado com sucesso!",
			statusCode: 200,
			data: updatedCart,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
		console.error(error);
	}
};

// DELETE
const deleteCart = async (req, res) => {
	try {
		await cartSchema.findByIdAndDelete(req.params.id);
		res.status(200).send({
			message: "Carrinho deletado com sucesso!",
			statusCode: 200,
		});
	} catch (error) {
		console.error(error);
	}
};

export default {
	createCart,
	updateCart,
	deleteCart,
	getAll,
	getCartById,
};
