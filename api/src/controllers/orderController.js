import orderSchema from "../models/orderSchema.js";

// CREATE
const createOrder = async (req, res) => {
	try {
		const newOrder = new orderSchema(req.body);

		const savedOrder = await newOrder.save();
		res.status(200).send({
			message: "Ordem criada com sucesso",
			statusCode: 200,
			data: savedOrder,
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// READ
const getAll = async (req, res) => {
	try {
		const orders = await orderSchema.find().exec();
		res.status(200).send(orders);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const getOrderById = async (req, res) => {
	try {
		const orders = await orderSchema.find({ userId: req.params.userId });
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getMonthlyIncome = async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(
		new Date().setMonth(lastMonth.getMonth() - 1)
	);

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$amount",
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);
		res.status(200).json(income);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
const updateOrder = async (req, res) => {
	try {
		const orderId = req.params.id;

		const updatedOrder = await orderSchema.findByIdAndUpdate(
			orderId,
			updateData,
			{
				new: true,
			}
		);

		if (!updatedOrder) {
			return res.status(404).send({ message: "Ordem não encontrada" });
		}

		res.status(200).send({
			message: "Ordem atualizada com sucesso!",
			statusCode: 200,
			data: updatedOrder,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
		console.error(error);
	}
};

// DELETE
const deleteOrder = async (req, res) => {
	try {
		await orderSchema.findByIdAndDelete(req.params.id);
		res.status(200).send({
			message: "Carrinho deletado com sucesso!",
			statusCode: 200,
		});
	} catch (error) {
		console.error(error);
	}
};

export default {
	createOrder,
	updateOrder,
	deleteOrder,
	getAll,
	getOrderById,
	getMonthlyIncome,
};
