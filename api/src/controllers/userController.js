import UserSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";

// READ

// // Versão com arrow function
// const getAll = async (req, res) => {
//   UserSchema.find(function (error, users) {
//     if (error) {
//       res.status(500).send({ message: error.message });
//     }
//     res.status(200).send(users);
//   });
// };

// Nova versão com função assíncrona
const getAll = async (req, res) => {
  try {
    const users = await UserSchema.find().exec();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// CREATE
const createUser = async (req, res) => {
  // encriptando o password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  try {
    //acessar as informações do usuário (vem do front)
    // acessar o body da req
    const newUser = new UserSchema(req.body);
    // debug
    // console.log("NOVO USUÁRIO CRIADO", newUser);

    // salvar esse usuário no banco de dados
    const savedUser = await newUser.save();
    // debug
    // console.log("USUÁRIO SALVO", savedUser);

    // enviar a reposta da requisição
    res.status(201).send({
      message: "Usuário cadastrado com sucesso",
      statusCode: 201,
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { password, ...updateData } = req.body;

    if (password) {
      // Se uma nova senha foi fornecida, criptografe-a antes de atualizar
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }
    // acessar o id do documento a ser atualizado
    // atualizar o documento
    const updatedUser = await UserSchema.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    res.status(200).send({
      message: "Usuário atualizado com sucesso!",
      statusCode: 200,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.error(error);
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    // achar usuário pelo id
    // deletar o usuário
    await UserSchema.findByIdAndDelete(req.params.id);
    // enviar resposta
    res.status(200).send({
      message: "Usuário deletado com sucesso!",
      statusCode: 200,
    });
  } catch (error) {
    console.error(error);
  }
};

const authenticatedUser = async (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Usuário autenticado",
  });
};

export default {
  getAll,
  createUser,
  updateUser,
  deleteUser,
  authenticatedUser,
};
