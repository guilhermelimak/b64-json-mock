import express from "express";
import { json } from "body-parser";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

const PORT = 8899;
const ADDRESS = "0.0.0.0";

app.get("/", (req, res) => {
  const body = req.query.body as string;

  if (!body) {
    res.sendStatus(200);
    return;
  }

  try {
    const decoded = JSON.parse(Buffer.from(body, "base64").toString("ascii"));
    res.send(decoded);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});

app.listen(PORT, ADDRESS, () => {
  console.log(`Listening on: ${ADDRESS}:${PORT}...`);
});
