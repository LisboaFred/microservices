import { prismaClient } from "../../infra/database/prismaClient";

type CreateOrderRequest = {
  customerId: string;
  items: [{ productId: string; quantity: number }];
};

export class CreateOrderUseCase {
  constructor() {}

  async execute(data: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        status: "Aguardando_Pagamento",
        OrderItems: {
          createMany: {
            data: data.items,
          },
        },
      },
    });
    return order;
  }
}
