import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";
import sequelize from "./config/config";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", todoRoutes);

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
