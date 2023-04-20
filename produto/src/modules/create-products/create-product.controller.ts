import { CreateProductUseCase } from "./create-product.usercase";
import { Request, Response } from "express";

export class CreateProductController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateProductUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(201).json(result);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
