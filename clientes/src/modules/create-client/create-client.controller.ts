import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usercase";

export class CreateClientController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateClientUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(201).json(result);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
