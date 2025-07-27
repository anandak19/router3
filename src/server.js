import { app } from "./app.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
