import productSchema from "../models/productSchema.js";

// READ
const getAll = async (req, res) => {
	try {
		const products = await productSchema.find().exec();
		res.status(200).send(products);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const getProductById = async (req, res) => {
	const productId = req.params.id;

	try {
		const product = await productSchema.findById(productId).exec();
		res.status(200).send(product);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

// CREATE
const createProduct = async (req, res) => {
	try {
		//acessar as informações do usuário (vem do front)
		// acessar o body da req
		const newProduct = new productSchema(req.body);
		// debug
		// console.log("NOVO PRODUTO CRIADO", newProduct);

		// salvar esse usuário no banco de dados
		const savedProduct = await newProduct.save();
		// debug
		// console.log("PRODUTO SALVO", savedProduct);

		// enviar a reposta da requisição
		res.status(201).send({
			message: "Produto cadastrado com sucesso",
			statusCode: 201,
			data: savedProduct,
		});
	} catch (error) {
		res.status(500).json(error);
	}
};

// UPDATE
const updateProduct = async (req, res) => {
	try {
		const productId = req.params.id;

		// acessar o id do documento a ser atualizado
		// atualizar o documento
		const updatedProduct = await productSchema.findByIdAndUpdate(
			productId,
			updateData,
			{
				new: true,
			}
		);

		if (!updatedProduct) {
			return res.status(404).send({ message: "Produto não encontrado" });
		}

		res.status(200).send({
			message: "Produto atualizado com sucesso!",
			statusCode: 200,
			data: updatedProduct,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
		console.error(error);
	}
};

// DELETE
const deleteProduct = async (req, res) => {
	try {
		// achar produto pelo id
		// deletar o produto
		await productSchema.findByIdAndDelete(req.params.id);
		// enviar resposta
		res.status(200).send({
			message: "Produto deletado com sucesso!",
			statusCode: 200,
		});
	} catch (error) {
		console.error(error);
	}
};

export default {
	getAll,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
