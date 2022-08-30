import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    if (users.length > 0) {
      return res.status(200).json(users);
    } else {
      return res.status(404).json("Não existe nenhum usuario");
    }
  }
  async findOne(req: Request, res: Response) {
    const { userID } = req.params;
    const user = await UserModel.findOne({
      where: {
        id: userID,
      },
    });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json("Esse usuario não existe");
    }
  }

  async create(req: Request, res: Response) {
    const { nome, telefone, email, senha } = req.body;
    const user = await UserModel.create({
      nome,
      telefone,
      email,
      senha,
    });
    res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { userID } = req.params;
    await UserModel.update(req.body, { where: { id: userID } });
    return res.status(204).send();
  }
  async delete(req: Request, res: Response) {
    const { userID } = req.params;
    await UserModel.destroy({ where: { id: userID } });
    return res.status(204).send();
  }
}

export default new UserController();
