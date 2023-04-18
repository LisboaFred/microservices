import { prismaClient } from "../../infra/database/prismaClient";

type CreateClientRequest = {
  name: string;
  password: string;
  email: string;
  phone: string;
};

export class CreateClientUseCase {
  constructor() {}

  async execute(data: CreateClientRequest) {
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email,
      },
    });

    await prismaClient.client.create({
      data: {
        ...data,
      },
    });
  }
}
