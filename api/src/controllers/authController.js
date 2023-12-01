import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

const login = async (req, res) => {
  try {
    // verificar se existe um email cadastrado no bd
    const user = await userSchema.findOne({ email: req.body.email }).exec();

    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        message: "Usuário não encontrado!",
        data: {
          email: req.body.email,
        },
      });
    }

    // criptografar a senha para que ela gere o mesmo hash que contem no bd
    const passwordValidate = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // verificar se o hash do bd é igual ao hash criado ao criptografar a senha
    if (!passwordValidate) {
      return res.status(401).json({
        statusCode: 401,
        message: "Não autorizado!",
      });
    }

    // gerar token com jwt
    const token = jwt.sign(
      { fullname: user.fullname, isAdmin: user.isAdmin },
      SECRET
    );

    res.status(200).json({
      statusCode: 200,
      message: "Login realizado com sucesso!",
      data: {
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
};

const tokenVerify = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: "Não autorizado!",
    });
  }

  try {
    jwt.verify(token, SECRET);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: "Token inválido!",
    });
  }
};

const tokenVerifyAdmin = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: "Não autorizado!",
    });
  }

  try {
    jwt.verify(token, SECRET);

    const tokenDecoded = jwt.decode(token);

    if (tokenDecoded.isAdmin) {
      next();
    } else {
      return res.status(401).json({
        statusCode: 401,
        message: "Usuário possui privilégios",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: "Token inválido!",
    });
  }
};

export default {
  login,
  tokenVerify,
  tokenVerifyAdmin,
};
