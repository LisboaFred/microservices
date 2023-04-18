import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["liked-oryx-8000-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "bGlrZWQtb3J5eC04MDAwJCjWhMLH4WX5avTyARx6lXMAfEIG6Wtn6NpZPI95B1Q",
    password: "573b75154063452781caa48d9ffffc4f",
  },
  ssl: true,
});

export { kafka };
