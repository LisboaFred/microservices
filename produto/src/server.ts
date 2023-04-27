import express, { Router } from "express";
import { router } from "./infra/routes";

const PORT = process.env.PORT ?? 3003;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () =>
  console.log(`Server produto is running on PORT ${PORT}`)
);
