import express from 'express';
import "dotenv/config";
import { connectDB } from './src/config/db.js';
import { indexRouter } from './src/routes/index.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", indexRouter);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});