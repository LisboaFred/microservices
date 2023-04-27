import { kafkaConsumer } from "../kafka.consumer";

type CustomerConsumer = {
  customerId: string;
  status: string;
};

export async function createCustomerConsumer() {
  console.log("CUSTOMER_CREATED");
  const consumer = await kafkaConsumer("ORDER_STATUS");
  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString();
      const statusConsumer = JSON.parse(messageToString) as CustomerConsumer;

      // Enviar mensagem por email
      console.log(
        `Atualização de satus - Client: ${statusConsumer.customerId} - Status: ${statusConsumer.status}`
      );
    },
  });
}

createCustomerConsumer();
