import { Request, Response } from "express";
import { CreateOrderUseCase } from "./update-order.usercase";

export class UpdateOrderController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const useCase = new CreateOrderUseCase();
    const result = await useCase.execute(request.body);
    return response.json(result);
  }
}
