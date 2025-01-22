import { Request, Response } from "express";
import { client } from "../config/redisClient";
const sayHello = async (req: Request, res: Response) => {
  try {
    const message = "Welcome to Ment";
    await client.publish("user-request", message);
    res.send("Published the Message ");
  } catch (error) {
    console.error("Error publishing message to Redis:", error);
    res.status(500).send("Something went wrong");
  }
};

export { sayHello };
